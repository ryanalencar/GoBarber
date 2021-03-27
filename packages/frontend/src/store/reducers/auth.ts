import produce from 'immer'
import { authActions } from '../actions/auth'

const defaultAuth = {
  token: null,
  signed: false,
  loading: false
}

export default function authReducer(state = defaultAuth, action): any {
  return produce(state, draft => {
    const { payload, type } = action
    switch (type) {
      case authActions.successLogin:
        draft.token = payload.token
        draft.signed = true
        draft.loading = false
        break
      default:
        return state
    }
  })
}
