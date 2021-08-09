import React from 'react'
import Layout from '../components/Layout'
import Banner from '../components/Hero/Banner'
import Btn from '../components/Btn'
import FullSeo from '../components/FullSeo'

const error = () => {
  return (
    <Layout>
      <FullSeo title="Oops"/>
      <header className="short-page">
        <Banner title="Oops! It's a dead end.">
          <Btn to="/" text="back to home page" />
        </Banner>
      </header>
    </Layout>
  )
}

export default error
