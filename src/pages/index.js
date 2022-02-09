import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import FullSeo from '../components/FullSeo'
import HeroTall from '../components/Hero/Tall'
import Btn from '../components/Btn'
import Banner from '../components/Hero/Banner'
import FourIcons from '../components/HomeAndAbout/FourIcons'
import Contact from '../components/Contact/Contact'


const IndexPage = ({ data, className }) => {
  const title=`Frontend Developer`
  return (
    <Layout>
      <FullSeo title={`${title}`} image={data.defaultBg.childImageSharp.fluid.src}/>
      <div className={className}>
      <HeroTall>
        <Banner
          color={`var(--clr-primary-dark)`}
          title={title}
          showTyping={true}>
          <div>
            <Btn to="/contact-kate/" text="Let's Chat"/>
          </div>
        </Banner>
      </HeroTall>
      <div className="digital-marketing-services">
        <p className="digital-marketing-services-h2"/>
        <FourIcons/>
        <p className="digital-marketing-services-h2"/>
      </div>
      <Contact/>
      </div>
      <div className="footer-btn">
        <Btn to="/build-color-schemes/" bgColor="dark" text="Generate Color Schemes"/>
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
  p.digital-marketing-services-h2{
    margin: 2.5rem auto;
  }
  @media(min-width: 768px){
    div.digital-marketing-services{
    }
  }
`
