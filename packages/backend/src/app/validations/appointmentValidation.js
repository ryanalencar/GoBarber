import * as Yup from 'yup'

const appointmentSchema = Yup.object().shape({
  provider_id: Yup.number().required(),
  date: Yup.date().required()
})

export default appointmentSchema
