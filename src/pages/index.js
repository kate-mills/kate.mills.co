import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import Banner from '../components/Banner'
import Mission from '../components/Home/Mission'
import FeaturedWebServices from '../components/Home/FeaturedWebServices'
import SEO from '../components/SEO'

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <StyledHero position="60% bottom" gradient home="true" img={data.defaultBg.childImageSharp.fluid}>
      <Banner
        title="Web solutions for beauty specialists"
        info="Get websites created by industry experts" >
        <AniLink fade to="/contact-us" className="btn btn-white">Get A Free Quote</AniLink>
      </Banner>
    </StyledHero>
    <Mission />
    <FeaturedWebServices />
  </Layout>
)
export const query = graphql`
  query {
    defaultBg: file(relativePath: { eq: "background/HomeComputer.jpeg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4160) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
