import { all } from 'redux-saga/effects'

import auth from './auth'
import user from './user'

export default function* rootSaga(): any {
  return yield all([auth, user])
}
