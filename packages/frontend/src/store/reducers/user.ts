import produce from 'immer'
import { authActions } from '../actions/auth'
import { userActions } from '../actions/user'

const defaultAuth = {
  profile: null
}

export default function authReducer(state = defaultAuth, action): any {
  return produce(state, draft => {
    const { payload, type } = action
    switch (type) {
      case authActions.successLogin:
        draft.profile = payload.user
        break
      case userActions.successUpdateProfile:
        draft.profile = payload.profile
        break
      default:
        return state
    }
  })
}
