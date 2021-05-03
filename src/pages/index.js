import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PinkHero from '../components/PinkHero'
import Banner from '../components/Banner'
import AboutUs from '../components/Home/AboutUs'
import Btn from '../components/Btn'
import FeaturedWebServices from '../components/Home/FeaturedWebServices'
import SEO from '../components/SEO'
import Survey from '../components/Survey'

export default ({ data }) => (
  <Layout>
    <SEO/>
    <PinkHero img={data.defaultBg.childImageSharp.fluid}>
      <Banner
        title="Websites for the beauty industry"
        info="Elevate your online presence with specialized digital solutions." >
        <Btn to="/contact-us/" text="Contact us" borderColor="var(--primaryBlack)"/>
      </Banner>
    </PinkHero>
    <AboutUs/> 
    <FeaturedWebServices 
      data-sal="zoom-out"
      data-sal-easing="ease-out"
      data-sal-duration="500"/>
    <Survey />
    <section className="footer-btn">
      <Btn to="/portfolio/" text="View Our Portfolio" color="var(--primaryColor)" colorful/>
    </section>
  </Layout>
)
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
