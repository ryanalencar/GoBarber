import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

export default function Store(reducers, middlewares): any {
  if (process.env.NODE_ENV !== 'production') {
    return createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)))
  }
  return createStore(reducers, applyMiddleware(...middlewares))
}
