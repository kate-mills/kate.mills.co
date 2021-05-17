import React from 'react'
import Layout from '../components/Layout'
import HeroShort from '../components/HeroShort'
import Banner from '../components/Banner'
import AboutKate  from '../components/AboutKate'
import Btn from '../components/Btn'
import SEO from '../components/SEO'

export default () => (
  <Layout>
    <SEO title="About Us" description="Set yourself apart with a custom website built by a local Napa Valley web designer specializing in beauty website design and social media for estheticians, beauticians, salons, spas & beauty companies."/>
    <HeroShort>
      <Banner
        title="Meet Kate"
        info="Home office in Napa Valley" >
      </Banner>
    </HeroShort>
      <AboutKate />
      <div className="footer-btn">
        <Btn to="/portfolio/" bgColor="dark" text="latest websites"/>
     </div>
  </Layout>
)
