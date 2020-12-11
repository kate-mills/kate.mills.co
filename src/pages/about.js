import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import Banner from '../components/Banner'
import AboutUs from '../components/Home/AboutUs'
import SEO from '../components/SEO'

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <StyledHero gradient={true} img={data.defaultBg.childImageSharp.fluid}>
      <Banner
        title="Digital by industry experts"
        info="located in Napa Valley" >
        <AniLink fade to="/portfolio" className="btn btn-white">View Our Portfolio</AniLink>
      </Banner>
    </StyledHero>
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
