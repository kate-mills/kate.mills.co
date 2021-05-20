import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import HeroTall from '../components/HeroTall'
import Btn from '../components/Btn'
import Banner from '../components/Banner'
import AboutUs from '../components/Home/AboutUs'
import WebPackages from '../components/Home/WebPackages'
import Contact from '../components/Contact/Contact'


const IndexPage = ({ data, className }) => {
  const t1=`Boost your beauty business in ${new Date().getFullYear()}`
  const t2=`with a pro website designer.`
  return (
    <Layout>
      <SEO title={`${t1} ${t2}`} image={data.defaultBg.childImageSharp.fluid.src}/>
      <div className={className}>
      <HeroTall>
        <Banner
          title={t1}
          info={t2}>
          <Btn to="/contact-us/" bgColor="light" text="Let's Chat"/>
        </Banner>
      </HeroTall>
      <div className="digital-marketing-services">
        <AboutUs/>
        <WebPackages/>
      </div>
      <Contact/>
      </div>
      <div className="footer-btn">
        <Btn to="/portfolio/" bgColor="dark" text="View Our Portfolio"/>
        <div style={{height:'2rem'}}/>
        <Btn to="/image-search/" bgColor="dark" text="search Images for your website" className="btn2"/>
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
