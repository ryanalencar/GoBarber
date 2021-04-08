import produce from 'immer'
import { authActions } from '../actions/auth'

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
      default:
        return state
    }
  })
}
