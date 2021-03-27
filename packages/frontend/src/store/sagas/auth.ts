/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-useless-return */

import { useRouter } from 'next/router'
import { all, takeLatest, call, put } from 'redux-saga/effects'
import { authActions, successLogin } from '../actions/auth'
import api from '~/services/api'

export function* signIn({ payload }): any {
  const router = useRouter()
  const { email, password } = payload
  const response = yield call(api.post, 'session', { email, password })

  const { token, user } = response

  if (!user.provider) return

  yield put(successLogin(token, user))

  router.push('/dashboard')
}

export default all([takeLatest(authActions.requestLogin, signIn)])
