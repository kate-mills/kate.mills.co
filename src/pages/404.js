import React from 'react'
import { Link } from 'gatsby'

const error = () => {
  return (
    <>
      <h1>Sorry, we couldn't find that page.</h1>
      <Link to="/">Back</Link>
    </>
  )
}

export default error
