import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import FullSeo from '../components/FullSeo'
import HeroTall from '../components/Hero/Tall'
import Btn from '../components/Btn'
import Banner from '../components/Hero/Banner'
import FourIcons from '../components/HomeAndAbout/FourIcons'
import WebPackages from '../components/HomeAndAbout/WebPackages'
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
          title={t1}
          info={t2}>
          <Btn to="/contact-us/" bgColor="light" text="Let's Chat"/>
        </Banner>
      </HeroTall>
      <div className="digital-marketing-services">
        <FourIcons/>
        <WebPackages/>
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
  div.digital-marketing-services{
    h2.banner-h2{
      color: var(--primaryBlack);
      text-align: center;
      font-size: 2rem;
    }
    p.we-offer-p{
      letter-spacing: var(--altSpacing);
      width: 80%;
      margin: 1rem auto;
    }
  }
  @media(min-width: 768px){
    div.digital-marketing-services{
      p.we-offer-p{
        width: 50%;
      }
    }
  }
`
