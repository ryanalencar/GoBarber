import React, { useEffect, useRef } from 'react'
import { Form } from '@unform/web'

import { useForm } from '../FormController/formContext'
import Input from '../FormElements/input'
import Button from '../FormElements/button'

function FormRegister({ setStep, name, shown }) {
  const ref = useRef(null)
  const { registerForm } = useForm(name)

  useEffect(() => {
    registerForm({ ref: ref.current, name, shown: !!shown })
  }, [name, registerForm, shown])

  const handleRegister = async data => {
    console.log(data)
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
