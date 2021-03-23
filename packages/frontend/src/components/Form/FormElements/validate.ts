import * as Yup from 'yup'

export const signUpSchema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string().email('Insira um e-mail válido').required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha precisa no mínimo 6 caracteres')
    .required('A senha é obrigatória')
})

export const signInSchema = Yup.object().shape({
  email: Yup.string().email('Insira um e-mail válido').required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha precisa no mínimo 6 caracteres')
    .required('A senha é obrigatória')
})
