import { isBefore, startOfHour, parseISO, format, subHours } from 'date-fns';
import pt from 'date-fns/locale/pt';
import formatDate from '../utils/formattedDate';

import File from '../models/File';
import User from '../models/User';
import Appointment from '../models/Appointments';
import Notification from '../schemas/Notification';

import Queue from '../../lib/Queue';
import CancellationMail from '../jobs/CancellationMail';
// import sendAppointmentCanceledMail from '../../services/sendmail/smtp';

import appointmentSchema from '../validations/appointmentValidation';

class AppointmentController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const appointments = await Appointment.findAll({
      where: { user_id: req.userId, canceled_at: null },
      order: ['date'],
      limit: 20,
      offset: (page - 1) * 20,
      attributes: ['id', 'date'],
      include: [
        {
          model: User,
          as: 'provider',
          attributes: ['id', 'name'],
          include: [
            {
              model: File,
              as: 'avatar',
              attributes: ['id', 'url', 'path'],
            },
          ],
        },
      ],
    });

    return res.json(appointments);
  }

  async store(req, res) {
    if (!(await appointmentSchema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }
    const { provider_id, date } = req.body;

    /**
     * Check if provider_id is a provider
     */
    const isProvider = await User.findOne({
      where: { id: provider_id, provider: true },
    });

    if (!isProvider) {
      return res
        .status(401)
        .json({ error: 'You can only create appointments with providers' });
    }

    /**
     * Check if user equal to provider
     */
    if (req.userId === provider_id) {
      res.status(401).json({
        error: 'Is not permitted to create an appointment to the same user',
      });
    }

    /**
     * Check for past dates
     */
    const hourStart = startOfHour(parseISO(date));

    if (isBefore(hourStart, new Date())) {
      return res.status(400).json({ error: 'Past dates are not permitted' });
    }

    /**
     * Check date availability
     */
    const checkAvailability = await Appointment.findOne({
      where: {
        provider_id,
        canceled_at: null,
        date: hourStart,
      },
    });

    if (checkAvailability) {
      return res
        .status(400)
        .json({ error: 'Appointment date is not available' });
    }

    const appointment = await Appointment.create({
      user_id: req.userId,
      provider_id,
      date: hourStart,
    });

    /**
     * Notify appointment provider
     */

    const user = await User.findByPk(req.userId);

    const formattedDate = formatDate(hourStart);

    await Notification.create({
      content: `Novo agendamento de ${user.name} para ${formattedDate}`,
      user: provider_id,
    });

    return res.json(appointment);
  }

  async delete(req, res) {
    const { id } = req.params;

    const appointment = await Appointment.findByPk(id, {
      include: [
        {
          model: User,
          as: 'provider',
          attributes: ['name', 'email'],
        },
        {
          model: User,
          as: 'user',
          attributes: ['name'],
        },
      ],
    });

    if (!appointment) {
      return res.status(404).json({ error: 'Appointment not found' });
    }

    if (appointment.canceled_at !== null) {
      return res.status(401).json({ error: 'Appointment already canceled' });
    }
    /**
     * Check if userId is the owner of the appointment
     */
    if (appointment.user_id !== req.userId) {
      return res.status(401).json({
        error: "You don't have permission to cancel this appointment",
      });
    }

    /**
     * Check if date is before 2 hours from appointment date
     */
    const dateWithSub = subHours(appointment.date, 2);

    if (isBefore(dateWithSub, new Date())) {
      return res
        .status(400)
        .json({ error: 'You can only cancel appointment 2 hours in advance' });
    }

    appointment.canceled_at = new Date();

    await appointment.save();

    const { name, email } = appointment.provider;
    const { name: userName } = appointment.user;
    const { date } = appointment;

    const formattedDate = formatDate(date);

    // sendAppointmentCanceledMail(name, email, userName, formattedDate);
    await Queue.add(CancellationMail.key, {
      name,
      email,
      userName,
      formattedDate,
    });

    return res.json(appointment);
  }
}

export default new AppointmentController();
