import React from 'react'
import withAuth from '~/components/common/withAuth2'
import api from '~/services/api'

api.get('appointments')

const Dashboard: React.FC = () => {
  return <h1>Dashboard Page</h1>
}

export default withAuth(Dashboard)
