import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PinkHero from '../components/PinkHero'
import Banner from '../components/Banner'
import AboutUs from '../components/Home/AboutUs'
import Btn from '../components/Btn'
import FeaturedWebServices from '../components/Home/FeaturedWebServices'
import SEO from '../components/SEO'
import Contact from '../components/Contact/Contact'


export default ({ data }) => {
  const year = new Date().getFullYear()
  const t1=`Boost your beauty business in ${year}`
  const t2=`with a pro web designer`
  return (
    <Layout>
      <SEO title={`${t1} ${t2}`}/>
      <PinkHero img={data.defaultBg.childImageSharp.fluid}>
        <Banner
          title={t1}
          info={t2}>
          <Btn to="/contact-us/" text="Let's Chat"/>
        </Banner>
      </PinkHero>
      <AboutUs/>
      <FeaturedWebServices
        data-sal="zoom-out"
        data-sal-easing="ease-out"
        data-sal-duration="500"/>
      <Contact/>
      <section className="footer-btn">
        <Btn to="/portfolio/" text="View Our Portfolio" color="var(--primaryColor)" colorful/>
      </section>
    </Layout>
  )
}
export const query = graphql`
  query {
    defaultBg: file(relativePath: { eq: "Hero/index-hero.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
