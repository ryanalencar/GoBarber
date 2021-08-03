import React, { useRef, useState } from 'react'
import { Image } from 'react-native'
import PropTypes from 'prop-types'

import Background from '../../components/Background'

import {
  Container,
  FormInput,
  SubmitButton,
  Form,
  SignLink,
  SignLinkText,
} from './styles'
import logo from '../../assets/logo.png'
import { useReducerAuth } from '../../store/hooks/auth'

function SignUp({ navigation }) {
  const [{ loading }, { dispatchSignUp }] = useReducerAuth()

  const emailRef = useRef()
  const passRef = useRef()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {
    dispatchSignUp({ name, email, password })
  }

  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon='person-outline'
            autoCorrect={false}
            autoCapitalize='none'
            placeholder='Nome completo'
            returnKeyType='next'
            value={name}
            onChangeText={setName}
            onSubmitEditing={() => emailRef.current.focus()}
          />
          <FormInput
            icon='mail-outline'
            keyboardType='email-address'
            autoCorrect={false}
            autoCapitalize='none'
            placeholder='Digite seu email'
            ref={emailRef}
            returnKeyType='next'
            value={email}
            onChangeText={setEmail}
            onSubmitEditing={() => passRef.current.focus()}
          />
          <FormInput
            icon='lock-outline'
            secureTextEntry
            placeholder='Digite sua senha secreta'
            ref={passRef}
            returnKeyType='send'
            value={password}
            onChangeText={setPassword}
            onSubmitEditing={handleSubmit}
          />
          <SubmitButton loading={loading} onPress={handleSubmit}>
            Criar
          </SubmitButton>
        </Form>

        <SignLink>
          <SignLinkText onPress={() => navigation.navigate('SignIn')}>
            Já possui uma conta? Entrar
          </SignLinkText>
        </SignLink>
      </Container>
    </Background>
  )
}

SignUp.defaultProps = {
  navigation: {},
}
SignUp.propTypes = {
  navigation: PropTypes.object,
}

export default SignUp
