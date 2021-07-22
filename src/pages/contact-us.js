import React from 'react'
import Layout from '../components/Layout'
import Banner from '../components/Hero/Banner'
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
        <Banner className="smallText" title="We make it easy" info="Are you drained from trying to make your website look professional?"/>
      <Contact />
    </Layout>
  )
}
export default contact
