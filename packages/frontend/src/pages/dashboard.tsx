import React from 'react'
import withAuth from '~/components/common/withAuth2'

const Dashboard: React.FC = () => {
  return <h1>Dashboard Page</h1>
}

export default withAuth(Dashboard)
