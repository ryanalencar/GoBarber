import React from 'react'
import Link from 'next/link'

import logo from '~/assets/logo.svg'
import withAuth from '~/components/common/withAuth2'

const Register: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Logo GoBarber" />

      <form>
        <input name="name" placeholder="Nome completo" />
        <input type="email" name="email" placeholder="Seu e-mail" />
        <input type="password" name="password" placeholder="Sua senha secreta" />
        <button type="submit">Criar conta</button>
        <Link href="/login">Já tenho Login</Link>
      </form>
    </>
  )
}

export default withAuth(Register)
