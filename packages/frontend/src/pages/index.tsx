import React from 'react'

import logo from '~/assets/logo.svg'
import withAuth from '~/components/common/withAuth2'
import FormsController from '~/components/Form/FormController'

const Login: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Logo GoBarber" />
      <FormsController />
    </>
  )
}

export default withAuth(Login)
