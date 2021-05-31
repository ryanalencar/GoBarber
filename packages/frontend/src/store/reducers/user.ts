import produce from 'immer'
import { authActions } from '../actions/auth'
import { userActions } from '../actions/user'

const defaultUser = {
  profile: null
}

export default function userReducer(state = defaultUser, action): any {
  return produce(state, draft => {
    const { payload, type } = action
    // console.log('PAYLOAD USER REDUCER', action.payload)
    switch (type) {
      case authActions.successLogin:
        draft.profile = payload.user
        break
      case userActions.successUpdateProfile:
        draft.profile = payload.profile
        break
      default:
    }
  })
}
