import React from 'react'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import Btn from '../components/Btn'
import SEO from '../components/SEO'

const error = () => {
  return (
    <Layout>
      <SEO title="Oops"/>
      <header className="short-page">
        <Banner title="oops it's a dead end">
          <Btn to="/" text="back to home page"/>
        </Banner>
      </header>
    </Layout>
  )
}

export default error
