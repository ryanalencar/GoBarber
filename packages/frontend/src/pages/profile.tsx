import React from 'react'
import { Form } from '@unform/web'
import styled, { css } from 'styled-components'

import PageLayout from '~/components/layouts'
import Button from '~/components/Form/FormElements/button'
import { Input } from '~/components/Form/FormElements'

import { useReducerUser } from '~/store/hooks'
import AvatarInput from '~/components/AvatarInput'

const Container = styled.div`
  max-width: 600px;
  margin: ${({ theme }) => theme.spacing.margin * 5}px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: ${({ theme }): number => theme.spacing.margin * 3}px;

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      ${({ theme }) =>
        css`
          margin: ${theme.spacing.margin}px 0 ${theme.spacing.margin * 2}px;
        `}
    }
  }
  > button {
    width: 100%;
    margin: 10px 0 0;
  }
`

const Profile: React.FC = () => {
  const [stateUser, { dispatchUpdateProfile }] = useReducerUser()
  const profile = stateUser.profile

  const handleSubmit = data => {
    console.log(data)
    dispatchUpdateProfile(data)
  }

  return (
    <PageLayout>
      <Container>
        <Form initialData={profile} onSubmit={handleSubmit}>
          <AvatarInput name="avatar_id" />
          <Input name="name" placeholder="Nome completo" />
          <Input type="email" name="email" placeholder="Seu endereço de email" />
          <hr />
          <Input type="password" name="oldPassword" placeholder="Sua senha atual" />
          <Input type="password" name="password" placeholder="Sua nova senha" />
          <Input type="password" name="confirmPassword" placeholder="Confirme sua nova senha" />
          <Button type="submit" title="Atualizar Perfil" />
        </Form>
        <Button type="button" title="Sair do GoBarber" bgColor="#f64c75" />
      </Container>
    </PageLayout>
  )
}

export default Profile
