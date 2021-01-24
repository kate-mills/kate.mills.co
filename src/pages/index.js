import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import Banner from '../components/Banner'
import Mission from '../components/Home/Mission'
import Btn from '../components/Btn'
import FeaturedWebServices from '../components/Home/FeaturedWebServices'
import SEO from '../components/SEO'
import Survey from '../components/Survey'

export default ({ data }) => (
  <Layout>
    <SEO />
    <StyledHero img={data.defaultBg.childImageSharp.fluid}>
      <Banner
        title="Web solutions for beauty specialists"
        info="Get websites created by industry experts" >
        <Btn to="/contact-us/" text="Get A Free Quote" />
      </Banner>
    </StyledHero>
    <Mission />
    <div className="border"/>
    <FeaturedWebServices />
    <div className="border"/>
    <Survey/>
  </Layout>
)
export const query = graphql`
  query {
    defaultBg: file(relativePath: { eq: "background/ally/Home2.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
