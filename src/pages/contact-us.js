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
    "url": "https://allydigitalsolutions.com",
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
      <SEO title="Contact" snippet={snippet} description={'Contact a local Napa web designer specializing in websites, blogs, eCommerce, and social media for estheticians, beauticians, salons, spas & beauty companies.'}/>
      <CustomHero position={`center right`} img={props.data.contactBcg.childImageSharp.fluid}>
        <Banner className="smallText" title="We make it easy" info="Are you drained from trying to make your website look professional?"/>
      </CustomHero>
      <Contact />
    </Layout>
  )
}

export default contact

export const query = graphql`
  query {
    contactBcg: file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
