import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import CustomHero from '../components/CustomHero'
import Banner from '../components/Banner'
import SEO from '../components/SEO'

const tours = ({ data }) => {
  return (
    <Layout>
      <SEO title="Portfolio" />
      <CustomHero 
        position="1% top"
        img={data.defaultBcg.childImageSharp.fluid}>
        <Banner title="Our Latest Projects"/>
      </CustomHero>
    </Layout>
  )
}

export default tours

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "background/Portfolio.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
