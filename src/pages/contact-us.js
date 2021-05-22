import React from 'react'
import Layout from '../components/Layout'
import HeroShort from '../components/HeroShort'
import Banner from '../components/Banner'
import Contact from '../components/Contact/Contact'
import FullSeo from '../components/FullSeo'


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
      <FullSeo title="Contact" snippet={snippet} description={'Contact a local Napa web designer specializing in websites, blogs, eCommerce, and social media for estheticians, beauticians, salons, spas & beauty companies.'}/>
      <HeroShort>
        <Banner className="smallText" title="We make it easy" info="Are you drained from trying to make your website look professional?"/>
      </HeroShort>
      <Contact />
    </Layout>
  )
}
export default contact
