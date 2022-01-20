import React from 'react'
import Layout from '../components/Layout'
import Banner from '../components/Hero/Banner'
import Contact from '../components/Contact/Contact'
import FullSeo from '../components/FullSeo'


const contact = props => {
  return (
    <Layout>
      <FullSeo title="Contact" description={'Kate is a Web Developer in Napa, Ca.'}/>
        <Banner className="smallText heavy-rain" title="Let's Chat" info="Are you looking for a motivated, JavaScript-focused developer to join your team?"/>
      <Contact />
    </Layout>
  )
}
export default contact
