import { createStore } from 'redux'

export default (reducers, middlewares): any => {
  return createStore(reducers, middlewares)
}
