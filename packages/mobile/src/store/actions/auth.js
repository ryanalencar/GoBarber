export const authActions = {
  requestLogin: '@auth/REQUEST_LOGIN',
  successLogin: '@auth/SUCCESS_LOGIN',
  failureSign: '@auth/FAILURE_SIGN',
  requestSignUp: '@auth/REQUEST_SIGNUP',
  signOut: '@auth/SIGN_OUT',
  rehydrate: 'persist/REHYDRATE',
}

export function signOut() {
  return {
    type: authActions.signOut,
  }
}

export function requestLogin(payload) {
  return {
    type: authActions.requestLogin,
    payload,
  }
}

export function requestSignUp(payload) {
  return {
    type: authActions.requestSignUp,
    payload,
  }
}

export function successLogin(token, user) {
  return {
    type: authActions.successLogin,
    payload: { token, user },
  }
}

export function failureSign() {
  return {
    type: authActions.failureSign,
  }
}
