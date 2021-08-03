import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfileRequest } from '../actions/user'

export function useReducerUser() {
  const stateUser = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const dispatchUpdateProfile = useCallback(
    (payload) => {
      dispatch(updateProfileRequest(payload))
    },
    [dispatch]
  )

  return [stateUser, { dispatchUpdateProfile }]
}
