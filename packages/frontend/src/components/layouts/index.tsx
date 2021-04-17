import React from 'react'
import dynamic from 'next/dynamic'
import { useReducerAuth } from '~/store/hooks'

const AuthLayout = dynamic(() => import('./auth'))
const DefaultLayout = dynamic(() => import('./default'))

const PageLayout: React.FC = ({ children }) => {
  const [{ signed }] = useReducerAuth()
  const Layout = signed ? DefaultLayout : AuthLayout

  return <Layout>{children}</Layout>
}

export default PageLayout
