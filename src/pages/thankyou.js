import React from 'react'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import Btn from '../components/Btn'
import SEO from '../components/SEO'

const Thankyou = () => {
  return (
    <Layout>
      <SEO title="Thank You"
        noindex />
      <header className="short-page">
        <Banner title="Thank you!" info=" Your submission was received.  We'll be in contact shortly.">
          <Btn to="/" text="back to home page"/>
        </Banner>
      </header>
    </Layout>
  )
}

export default Thankyou
