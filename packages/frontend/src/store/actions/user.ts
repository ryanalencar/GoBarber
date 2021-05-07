export const userActions = {
  requestUpdateProfile: '@user/UPDATE_PROFILE_REQUEST',
  successUpdateProfile: '@user/UPDATE_PROFILE_SUCCESS',
  failureUpdateProfile: '@user/UPDATE_PROFILE_FAILURE'
}

export function updateProfileRequest(payload: any): any {
  return {
    type: userActions.requestUpdateProfile,
    payload
  }
}

export function updateProfileSuccess(payload: any): any {
  return {
    type: userActions.successUpdateProfile,
    payload
  }
}

export function updateProfileFailure(): any {
  return {
    type: userActions.failureUpdateProfile
  }
}
