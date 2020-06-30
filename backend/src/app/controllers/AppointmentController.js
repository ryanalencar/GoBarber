import Appointment from '../models/Appointments';
import User from '../models/User';

import appointmentSchema from '../validations/appointmentValidation';

class AppointmentController {
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

    const appointment = await Appointment.create({
      user_id: req.userId,
      provider_id,
      date,
    });

    return res.json(appointment);
  }
}

export default new AppointmentController();
