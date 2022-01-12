import React from 'react'
import Layout from '../components/Layout'
import Banner from '../components/Hero/Banner'
import Contact from '../components/Contact/Contact'
import FullSeo from '../components/FullSeo'


const snippet = `{
    "@context": "https://schema.org",
    "@type": "Organization",
    "url": "https://katemillsco.com",
    "name": "Kate Mills Company, LLC",
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
      <FullSeo title="Contact" snippet={snippet} description={'We are a national Digital Marketing & Web Development Agency located in Napa, CA.'}/>
        <Banner className="smallText heavy-rain" title="We make it easy" info="Are you drained from trying to make your website look professional?"/>
      <Contact />
    </Layout>
  )
}
export default contact
