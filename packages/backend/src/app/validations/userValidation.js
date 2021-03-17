import * as Yup from 'yup'

export const storeSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required()
})

export const updateSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  oldPassword: Yup.string().min(6),
  password: Yup.string()
    .min(6)
    .when('oldPassword', (oldPassword, field) => {
      return oldPassword ? field.required() : field
    }),
  confirmPassword: Yup.string().when('password', (password, field) => {
    return password ? field.required().oneOf([Yup.ref('password')]) : field
  })
})
