export const userActions = {
  requestUpdateProfile: '@user/UPDATE_PROFILE_REQUEST',
  successUpdateProfile: '@user/UPDATE_PROFILE_SUCCESS',
  failureUpdateProfile: '@user/UPDATE_PROFILE_FAILURE',
}

export function updateProfileRequest(data) {
  return {
    type: userActions.requestUpdateProfile,
    payload: { data },
  }
}

export function updateProfileSuccess(profile) {
  return {
    type: userActions.successUpdateProfile,
    payload: { profile },
  }
}

export function updateProfileFailure() {
  return {
    type: userActions.failureUpdateProfile,
  }
}
