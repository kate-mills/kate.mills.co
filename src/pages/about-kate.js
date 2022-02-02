import React from 'react'
import Layout from '../components/Layout'
import Banner from '../components/Hero/Banner'
import AboutKate  from '../components/HomeAndAbout/AboutKate'
import Btn from '../components/Btn'
import FullSeo from '../components/FullSeo'

const AboutPage = () => {
  return (
    <Layout>
      <FullSeo title="About Kate" description="Kate Mills is a Web Developer in Napa, Ca. "/>
        <Banner
          title="Kate Mills">
        </Banner>
        <AboutKate />
        <div className="footer-btn">
          <Btn to="/build-color-schemes/" color colorful text="Latest Apps" />
       </div>
    </Layout>
  )
}

export default AboutPage
