import { all, takeLatest, call, put } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import { authActions, successLogin, failureSign } from '../actions/auth'
import api from '~/services/api'

export function* signIn({ payload }) {
  try {
    const { email, password } = payload
    const newAuth = yield call(api.post, 'sessions', { email, password })

    // console.log('newAuth',newAuth.data)

    const { token, user } = newAuth.data || {}

    if (!user.provider) {
      toast.error('Usuário não é prestador')
      return yield put(failureSign())
    }

    if (!token) {
      return yield put(failureSign())
    }

    api.defaults.headers.Authorization = `Bearer ${token}`

    yield put(successLogin(token, user))

    return true
  } catch (error) {
    toast.error('Falha na autenticação, verifique seus dados')
    return yield put(failureSign())
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload

    yield call(api.post, 'users', {
      name,
      email,
      password,
      provider: true
    })

    toast.success('Usuário cadastrado com sucesso. Faça o login.')
  } catch (error) {
    // console.log('error',error)
    toast.error('Falha no cadastro, verifique seus dados!')
    yield put(failureSign())
  }
}

export function setToken({ payload }) {
  if (!payload) return
  const { token } = payload.auth
  if (token) api.defaults.headers.Authorization = `Bearer ${token}`
}

export default all([
  takeLatest(authActions.rehydrate, setToken),
  takeLatest(authActions.requestLogin, signIn),
  takeLatest(authActions.requestSignUp, signUp)
])
