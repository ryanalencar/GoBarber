interface IAuthActions {
  requestLogin: string
  successLogin: string
  failureSign: string
  requestSignUp: string
  signOut: string
  rehydrate: string
}

export const authActions: IAuthActions = {
  requestLogin: '@auth/REQUEST_LOGIN',
  successLogin: '@auth/SUCCESS_LOGIN',
  failureSign: '@auth/FAILURE_SIGN',
  requestSignUp: '@auth/REQUEST_SIGNUP',
  signOut: '@auth/SIGN_OUT',
  rehydrate: 'persist/REHYDRATE'
}

export function signOut(): any {
  return {
    type: authActions.signOut
  }
}

export function requestLogin(payload: any): any {
  return {
    type: authActions.requestLogin,
    payload
  }
}

export function requestSignUp(payload: any): any {
  return {
    type: authActions.requestSignUp,
    payload
  }
}

export function successLogin(token: any, user: any): any {
  return {
    type: authActions.successLogin,
    payload: { token, user }
  }
}

export function failureSign(): any {
  return {
    type: authActions.failureSign
  }
}
