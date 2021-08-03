import React, { useRef, useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

import {
  Container,
  Title,
  Form,
  FormInput,
  SubmitButton,
  Separator,
  LogoutButton,
} from './styles'
import Background from '../../components/Background'
import { useReducerUser } from '../../store/hooks/user'
import { useReducerAuth } from '../../store/hooks/auth'

function Profile() {
  const [{ profile }, { dispatchUpdateProfile }] = useReducerUser()
  const [, { dispatchSignOut }] = useReducerAuth()
  const { name: profileName, email: profileEmail } = profile

  const [name, setName] = useState(profileName)
  const [email, setEmail] = useState(profileEmail)
  const [oldPassword, setOldPassword] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const emailRef = useRef(null)
  const oldPassRef = useRef(null)
  const passRef = useRef(null)
  const confirmPassRef = useRef(null)

  function handleSubmit() {
    dispatchUpdateProfile({
      name,
      email,
      oldPassword,
      password,
      confirmPassword,
    })
  }

  function handleLogout() {
    dispatchSignOut()
  }

  useEffect(() => {
    setOldPassword('')
    setPassword('')
    setConfirmPassword('')
  }, [profile])

  return (
    <Background>
      <Container>
        <Title>Meu Perfil</Title>
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
            onSubmitEditing={() => oldPassRef.current.focus()}
          />

          <Separator />

          <FormInput
            icon='lock-outline'
            secureTextEntry
            placeholder='Digite sua senha atual'
            ref={oldPassRef}
            returnKeyType='next'
            value={oldPassword}
            onChangeText={setOldPassword}
            onSubmitEditing={() => passRef.current.focus()}
          />
          <FormInput
            icon='lock-outline'
            secureTextEntry
            placeholder='Digite sua nova senha'
            ref={passRef}
            returnKeyType='next'
            value={password}
            onChangeText={setPassword}
            onSubmitEditing={() => confirmPassRef.current.focus()}
          />
          <FormInput
            icon='lock-outline'
            secureTextEntry
            placeholder='Confirmação de senha'
            ref={confirmPassRef}
            returnKeyType='send'
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            onSubmitEditing={handleSubmit}
          />
          <SubmitButton onPress={handleSubmit}>Atualizar Perfil</SubmitButton>
          <LogoutButton onPress={handleLogout}>Sair do GoBarber</LogoutButton>
        </Form>
      </Container>
    </Background>
  )
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu Perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name='person' size={20} color={tintColor} />
  ),
}

export default Profile
