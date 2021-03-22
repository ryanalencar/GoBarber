import React from 'react'
import Link from 'next/link'

import logo from '~/assets/logo.svg'
import withAuth from '~/components/common/withAuth2'

const Login: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Logo GoBarber" />

      <form>
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha secreta" />
        <button type="submit">Acessar</button>
        <Link href="/register">Criar conta gratuita</Link>
      </form>
    </>
  )
}

export default withAuth(Login)
