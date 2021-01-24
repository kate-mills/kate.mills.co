import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import CustomHero from '../components/CustomHero'
import Banner from '../components/Banner'
import Contact from '../components/Contact/Contact'
import SEO from '../components/SEO'


const snippet = `{
    "@context": "https://schema.org",
    "@type": "Organization",
    "url": "https://allydigital.netlify.app",
    "name": "Ally Digital Solutions",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-707-266-8106",
      "contactType": "Customer Support"
  }
}
`
const contact = props => {
  return (
    <Layout>
      <SEO title="Contact" snippet={snippet}/>
      <CustomHero position={`center right`} img={props.data.contactBcg.childImageSharp.fluid}>
        <Banner title="Contact Us" info="dev@allydigitalsolutions.com" />
      </CustomHero>
      <Contact />
    </Layout>
  )
}

export default contact

export const query = graphql`
  query {
    contactBcg: file(relativePath: { eq: "backgrounds/contact-hero.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
