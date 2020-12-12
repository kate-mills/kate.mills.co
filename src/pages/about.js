import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import CustomHero from '../components/CustomHero'
import Banner from '../components/Banner'
import AboutUs from '../components/Home/AboutUs'
import Btn from '../components/Btn'
import SEO from '../components/SEO'

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <CustomHero img={data.defaultBg.childImageSharp.fluid}>
      <Banner
        title="Digital by industry experts"
        info="located in Napa Valley" >
        <Btn to="/portfolio/" text="View our portfolio"/>
      </Banner>
    </CustomHero>
    <AboutUs />
  </Layout>
)
export const query = graphql`
  query {
    defaultBg: file(relativePath: { eq: "background/Napa.jpeg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
