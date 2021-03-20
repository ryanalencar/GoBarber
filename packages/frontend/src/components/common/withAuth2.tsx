import { NextPageContext } from 'next'
import Router from 'next/router'
import React from 'react'
import AuthLayout from '../layouts/auth'
import DefaultLayout from '../layouts/default'

const login = '/login'

export default function withAuth(WrappedComponent: any) {
  const signed = false
  const Layout = signed ? DefaultLayout : AuthLayout
  const AuthHoc = ({ ...props }) => (
    <Layout>
      <WrappedComponent {...props} />
    </Layout>
  )

  AuthHoc.getInitialProps = async (context: NextPageContext) => {
    // if (!signed) {
    //   if (context.res) {
    //     context.res?.writeHead(302, { Location: login })
    //     context.res?.end()
    //   } else {
    //     Router.replace(login)
    //   }
    // } else if (WrappedComponent.getInitialProps) {
    //   const wrappedProps = await WrappedComponent.getinitialProps({ ...context, auth: signed })
    //   return { ...wrappedProps, signed }
    // }

    return { signed }
  }

  return AuthHoc
}
