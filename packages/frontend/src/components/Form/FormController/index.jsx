import React, { useState } from 'react'

import { FormProvider } from './formContext'
import FormLogin from '../../FormLogin'
import FormRegister from '../../FormRegister'

export default function FormsController() {
  const [step, setStep] = useState(0)

  const handleStep = s => {
    setStep(s)
  }

  return (
    <FormProvider>
      {step === 0 ? <FormLogin name="login" setStep={handleStep} /> : null}
      {step === 1 ? <FormRegister name="register" setStep={handleStep} /> : null}
    </FormProvider>
  )
}
