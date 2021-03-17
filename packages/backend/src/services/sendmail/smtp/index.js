import Mail from '../../../lib/Mail'

export default async function sendAppointmentCanceledMail(name, email, username, date) {
  const mail = Mail.sendMail({
    to: `${name} <${email}>`,
    subject: 'Agendamento cancelado',
    template: 'cancellation',
    context: {
      provider: name,
      user: username,
      date
    }
  })

  return mail
}
