import React, { useEffect, useRef } from 'react'
import { Form } from '@unform/web'
import * as Yup from 'yup'

import { useForm } from '../Form/FormController/formContext'
import Input from '../Form/FormElements/input'
import Button from '../Form/FormElements/button'
import { signUpSchema } from '../Form/FormElements/validate'
import { useReducerAuth } from '~/store/hooks'

function FormRegister({ setStep, name, shown }) {
  const ref = useRef(null)
  const { registerForm } = useForm(name)
  const [, { dispatchSignUp }] = useReducerAuth()

  useEffect(() => {
    registerForm({ ref: ref.current, name, shown: !!shown })
  }, [name, registerForm, shown])

  const handleRegister = async data => {
    try {
      await signUpSchema.validate(data, { abortEarly: false })
      dispatchSignUp(data)
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errorMessages = {}
        error.inner.forEach(error => (errorMessages[error.path] = error.message))
        ref.current.setErrors(errorMessages)
      }
    }
  }

  return (
    <Form onSubmit={handleRegister} ref={ref}>
      <Input name="name" placeholder="Nome completo" />
      <Input name="email" placeholder="Seu e-mail" />
      <Input type="password" name="password" placeholder="Sua senha secreta" />
      <Button type="submit" title="Criar conta" />
      <span onClick={() => setStep(0)}>Já tenho uma conta. Entrar</span>
    </Form>
  )
}

export default FormRegister
