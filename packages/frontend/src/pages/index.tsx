import React from 'react'

import logo from '~/assets/logo.svg'
import FormsController from '~/components/Form/FormController'
import PageLayout from '~/components/layouts'

const Login: React.FC = () => {
  return (
    <PageLayout>
      <img src={logo} alt="Logo GoBarber" />
      <FormsController />
    </PageLayout>
  )
}

export default Login
