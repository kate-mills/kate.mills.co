import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import FullSeo from '../components/FullSeo'
import HeroTall from '../components/Hero/Tall'
import Btn from '../components/Btn'
import Banner from '../components/Hero/Banner'
import FourIcons from '../components/HomeAndAbout/FourIcons'
import OurSolutions  from '../components/HomeAndAbout/OurSolutions'
import Contact from '../components/Contact/Contact'


const IndexPage = ({ data, className }) => {
  const t1=`Boost your beauty business in ${new Date().getFullYear()}`
  const t2=`with a pro website designer.`
  return (
    <Layout>
      <FullSeo title={`${t1} ${t2}`} image={data.defaultBg.childImageSharp.fluid.src}/>
      <div className={className}>
      <HeroTall>
        <Banner
          color={`var(--primaryWhite)`}
          title={t1}
          info={t2}>
          <Btn to="/contact-us/" bgColor="light" text="Let's Chat"/>
        </Banner>
      </HeroTall>
      <div className="digital-marketing-services">
        <h2 className="digital-marketing-services-h2">Give Your Small Business a Competitive Advantage with a Professionally Done Website.</h2>
        <OurSolutions/>
        <FourIcons/>
      </div>
      <Contact/>
      </div>
      <div className="footer-btn">
        <Btn to="/portfolio/" bgColor="dark" text="View Our Portfolio"/>
        <div style={{height:'2rem'}}/>
        <Btn to="/free-website-images/" bgColor="dark" text="Free Website Images" className="btn2"/>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query {
    defaultBg: file(relativePath: { eq: "ally-digital-solutions-website-designers.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
export default styled(IndexPage)`
  h2.digital-marketing-services-h2{
    color: var(--primaryBlack);
    font-size: 2rem;
    line-height: 1.5;
    margin: 0 auto;
    padding: 4rem 1.5rem 0;
    text-align: center;
    white-space: pre-wrap;
    word-spacing: unset;
  }
  div.digital-marketing-services{
  }
  @media(min-width: 768px){
    div.digital-marketing-services{
    }
  }
`
