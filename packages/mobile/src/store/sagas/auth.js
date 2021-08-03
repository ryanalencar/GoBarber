import { all, takeLatest, call, put } from 'redux-saga/effects'
import { Alert } from 'react-native'
import { authActions, successLogin, failureSign } from '../actions/auth'
import api from '../../services/api'

export function* signIn({ payload }) {
  try {
    const { email, password } = payload
    const newAuth = yield call(api.post, 'sessions', { email, password })

    const { token, user } = newAuth.data || {}

    if (user.provider) {
      Alert.alert(
        'Erro no login',
        'O usuário não pode ser prestador de serviços'
      )
      return yield put(failureSign())
    }

    if (!token) {
      return yield put(failureSign())
    }

    api.defaults.headers.Authorization = `Bearer ${token}`

    yield put(successLogin(token, user))

    return true
  } catch (error) {
    console.log(error)
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro no login. Verifique seus dados'
    )
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
      provider: false,
    })
  } catch (error) {
    Alert.alert(
      'Falha no cadastro',
      'Houve um erro no cadastro. Verifique seus dados'
    )
    yield put(failureSign())
  }
}

export function setToken({ payload }) {
  if (!payload) return
  const { token } = payload.auth
  if (token) api.defaults.headers.Authorization = `Bearer ${token}`
}

export function signOut() {
  Alert.alert('Usuário deslogado', 'Usuário deslogado com sucesso')
}

export default all([
  takeLatest(authActions.signOut, signOut),
  takeLatest(authActions.rehydrate, setToken),
  takeLatest(authActions.requestLogin, signIn),
  takeLatest(authActions.requestSignUp, signUp),
])
