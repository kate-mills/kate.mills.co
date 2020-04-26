import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const error = () => {
  return (
    <Layout>
      <h3>
        Sorry, we couldn't find that page. <Link to="/">back</Link>
      </h3>
    </Layout>
  )
}

export default error
