import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import StyledHero from '../components/StyledHero'
import Contact from '../components/Contact/Contact'

const contact = props => {
  return (
    <Layout>
      <StyledHero img={props.data.contactBcg.childImageSharp.fluid} />
      <Contact />
    </Layout>
  )
}

export default contact

export const query = graphql`
  query {
    contactBcg: file(relativePath: { eq: "contactBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
