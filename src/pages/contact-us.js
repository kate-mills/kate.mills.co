import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import CustomHero from '../components/CustomHero'
import Banner from '../components/Banner'
import Contact from '../components/Contact/Contact'
import SEO from '../components/SEO'

const contact = props => {
  return (
    <Layout>
      <SEO title="Contact" />
      <CustomHero position={`center right`} img={props.data.contactBcg.childImageSharp.fluid}>
        <Banner title="Contact us"/>
      </CustomHero>
      <Contact />
    </Layout>
  )
}

export default contact

export const query = graphql`
  query {
    contactBcg: file(relativePath: { eq: "background/Contact.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
