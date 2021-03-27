export const authActions = {
  requestLogin: '@auth/REQUEST_LOGIN',
  successLogin: '@auth/SUCCESS_LOGIN',
  failureSign: '@auth/FAILURE_SIGN'
}

export function requestLogin(payload: any): any {
  return {
    type: authActions.requestLogin,
    payload
  }
}

export function successLogin(payload: any): any {
  return {
    type: authActions.successLogin,
    payload
  }
}

export function failureSign(): any {
  return {
    type: authActions.failureSign
  }
}
