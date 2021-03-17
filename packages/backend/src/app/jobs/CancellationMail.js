import sendAppointmentCanceledMail from '../../services/sendmail/smtp'

class CancellationMail {
  get key() {
    return 'CancellationMail'
  }

  async handle({ data }) {
    const { name, email, userName, formattedDate } = data

    console.log('A FILA EXECUTOU')

    await sendAppointmentCanceledMail(name, email, userName, formattedDate)
  }
}

export default new CancellationMail()
