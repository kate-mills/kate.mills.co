import React from 'react'
import Layout from '../components/Layout'
import Banner from '../components/Hero/Banner'
import Btn from '../components/Btn'
import FullSeo from '../components/FullSeo'

const Thankyou = () => {
  return (
    <Layout>
      <FullSeo title="Thank You"
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
