import createSagaMiddleware from 'redux-saga'

import createStore from './createStore'
import rootReducer from './reducers'
import rootSaga from './sagas'

// const sagaMonitor = process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null
const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

const store = createStore(rootReducer, middlewares)

sagaMiddleware.run(rootSaga)

export default store
