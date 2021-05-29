import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfileRequest } from '../actions/user'
import { IRootState } from '../reducers'

export function useReducerUser(): any {
  const stateUser = useSelector<IRootState>(state => state.user)
  const dispatch = useDispatch()

  const dispatchUpdateProfile = useCallback(
    payload => {
      dispatch(updateProfileRequest(payload))
    },
    [dispatch]
  )

  return [stateUser, { dispatchUpdateProfile }]
}
