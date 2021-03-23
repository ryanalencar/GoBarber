import produce from 'immer'

const defaultAuth = {}

export default function authReducer(state = defaultAuth, action): any {
  return produce(state, draft => {
    const { payload, type } = action
    switch (type) {
      default:
        return state
    }
  })
}
