import Mail from '../../../lib/Mail';

export default async function sendAppointmentCanceledMail(name, email) {
  const mail = await Mail.sendMail({
    to: `${name} <${email}>`,
    subject: 'Agendamento cancelado',
    text: 'Você tem um novo cancelamento',
  });

  return mail;
}
