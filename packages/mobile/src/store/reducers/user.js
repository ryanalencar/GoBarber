import produce from 'immer'
import { authActions } from '../actions/auth'
import { userActions } from '../actions/user'

const defaultUser = {
  profile: null,
}

export default function userReducer(state = defaultUser, action) {
  return produce(state, (draft) => {
    const { payload, type } = action
    switch (type) {
      case authActions.successLogin:
        draft.profile = payload.user
        break
      case userActions.successUpdateProfile:
        draft.profile = payload.profile
        break
      case authActions.signOut:
        draft.profile = null
        break
      default:
    }
  })
}
