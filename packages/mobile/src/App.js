import React from 'react'

import createRouter from './routes'
import { useReducerAuth } from './store/hooks/auth'

function App() {
  const [{ signed }] = useReducerAuth()
  const Routes = createRouter(signed)
  return <Routes />
}

export default App
