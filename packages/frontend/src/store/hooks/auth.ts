import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { requestLogin, requestSignUp, signOut } from '../actions/auth'
import { IRootState } from '../reducers'

export function useReducerAuth(): any {
  const stateAuth = useSelector<IRootState>(state => state.auth)
  const dispatch = useDispatch()

  const dispatchLogin = useCallback(
    payload => {
      dispatch(requestLogin(payload))
    },
    [dispatch]
  )

  const dispatchSignUp = useCallback(
    payload => {
      dispatch(requestSignUp(payload))
    },
    [dispatch]
  )

  const dispatchSignOut = useCallback(() => {
    dispatch(signOut())
  }, [dispatch])

  return [stateAuth, { dispatchLogin, dispatchSignUp, dispatchSignOut }]
}
