import React, { useEffect, useRef } from 'react'
import { Form } from '@unform/web'

import { useForm } from '../FormController/formContext'
import Input from '../FormElements/input'
import Button from '../FormElements/button'

function FormLogin({ setStep, name, shown }) {
  const ref = useRef(null)
  const { registerForm } = useForm(name)

  useEffect(() => {
    registerForm({ ref: ref.current, name, shown: !!shown })
  }, [name, registerForm, shown])

  const handleLogin = async data => {
    console.log(data)
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
