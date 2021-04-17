export const authActions = {
  requestLogin: '@auth/REQUEST_LOGIN',
  successLogin: '@auth/SUCCESS_LOGIN',
  failureSign: '@auth/FAILURE_SIGN',
  requestSignUp: '@auth/REQUEST_SIGNUP',
  rehydrate: 'persist/REHYDRATE'
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
