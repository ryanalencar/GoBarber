export const userActions = {
  requestUpdateProfile: '@user/UPDATE_PROFILE_REQUEST',
  successUpdateProfile: '@user/UPDATE_PROFILE_SUCCESS',
  failureUpdateProfile: '@user/UPDATE_PROFILE_FAILURE'
}

export function updateProfileRequest(data: any): any {
  return {
    type: userActions.requestUpdateProfile,
    payload: { data }
  }
}

export function updateProfileSuccess(profile: any): any {
  return {
    type: userActions.successUpdateProfile,
    payload: { profile }
  }
}

export function updateProfileFailure(): any {
  return {
    type: userActions.failureUpdateProfile
  }
}
