import { all, takeLatest, call, put } from 'redux-saga/effects'
import {toast} from 'react-toastify'
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

    yield put(successLogin(token, user))

    return true
  } catch (error) {
    toast.error("Falha na autenticação, verifique seus dados")
    return yield put(failureSign())
  }

  // const router = useRouter()
  // const { email, password } = payload
  // const response = yield call(api.post, 'sessions', { email, password })

  // const { token, user } = response

  // if (!user.provider) return

  // yield put(successLogin(token, user))

  // router.push('/dashboard')
}

export default all([takeLatest(authActions.requestLogin, signIn)])
