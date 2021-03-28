import { all, takeLatest, call, put } from 'redux-saga/effects'
import { authActions, successLogin, failureSign } from '../actions/auth'
import api from '~/services/api'

export function* signIn({ payload }) {
  try {
    const { email, password } = payload
    const newAuth = yield call(api.post, 'sessions', { email, password })

    // console.log('newAuth',newAuth.data)

    const { token, user } = newAuth.data || {}

    if (!user.provider) {
      console.error('usuário não é prestador')
      alert('usuário não é prestador')
      return
    }

    if (!token) {
      return yield put(failureSign())
    }

    yield put(successLogin(token, user))

    return true
  } catch (error) {
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
