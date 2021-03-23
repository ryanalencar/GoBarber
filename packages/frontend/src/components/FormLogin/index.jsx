import React, { useEffect, useRef } from 'react'
import { Form } from '@unform/web'
import * as Yup from 'yup'

import { useForm } from '../Form/FormController/formContext'
import Input from '../Form/FormElements/input'
import Button from '../Form/FormElements/button'
import { signInSchema } from '../Form/FormElements/validate'

function FormLogin({ setStep, name, shown }) {
  const ref = useRef(null)
  const { registerForm } = useForm(name)

  useEffect(() => {
    registerForm({ ref: ref.current, name, shown: !!shown })
  }, [name, registerForm, shown])

  const handleLogin = async data => {
    try {
      await signInSchema.validate(data, { abortEarly: false })
      console.log(data)
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errorMessages = {}
        error.inner.forEach(error => (errorMessages[error.path] = error.message))
        ref.current.setErrors(errorMessages)
      }
    }
  }

  return (
    <Form onSubmit={handleLogin} ref={ref}>
      <Input name="email" placeholder="Seu e-mail" />
      <Input type="password" name="password" placeholder="Sua senha secreta" />
      <Button type="submit" title="Acessar" />
      <span onClick={() => setStep(1)}>Criar conta gratuita</span>
    </Form>
  )
}

export default FormLogin
