import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import CustomHero from '../components/CustomHero'
import Banner from '../components/Banner'
import AboutKate  from '../components/AboutKate'
import Btn from '../components/Btn'
import SEO from '../components/SEO'

export default ({ data }) => (
  <Layout>
    <SEO title="About Us" description="Set yourself apart with a custom website built by a local Napa Valley web designer specializing in beauty website design and social media for estheticians, beauticians, salons, spas & beauty companies."/>
    <CustomHero img={data.defaultBg.childImageSharp.fluid}>
      <Banner
        title="Meet Kate"
        info="Home office in Napa Valley" >
      </Banner>
    </CustomHero>
      <AboutKate />
      <div className="footer-btn">
        <Btn to="/portfolio/" color colorful text="latest websites"/>
     </div>
  </Layout>
)
export const query = graphql`
  query {
    defaultBg: file(relativePath: { eq: "Hero/13.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
