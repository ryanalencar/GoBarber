import { NextPageContext } from 'next'
import Router from 'next/router'
import React from 'react'

const login = '/login'

const checkUserAuthentication = () => {
  return false
}

export default function withAuth(WrappedComponent: any) {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />

  hocComponent.getInitialProps = async (context: NextPageContext) => {
    const userAuth = await checkUserAuthentication

    if (!userAuth) {
      if (context.res) {
        context.res?.writeHead(302, {
          Location: login
        })
        context.res?.end()
      } else {
        Router.replace(login)
      }
    } else if (WrappedComponent.getInitialProps) {
      const wrappedProps = await WrappedComponent.getInitialProps({ ...context, auth: userAuth })
      return { ...wrappedProps, userAuth }
    }

    return { userAuth }
  }

  return hocComponent
}
