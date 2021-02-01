import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import Banner from '../components/Banner'
import AboutUs from '../components/Home/AboutUs'
import Btn from '../components/Btn'
import FeaturedWebServices from '../components/Home/FeaturedWebServices'
import SEO from '../components/SEO'
import Survey from '../components/Survey'

export default ({ data }) => (
  <Layout>
    <SEO title="Home"/>
    <StyledHero img={data.defaultBg.childImageSharp.fluid}>
      <Banner
        title="Web Design for the beauty industry"
        info="Elevate your online presence with specialized digital solutions." >
        <Btn to="/contact-us/" text="Free Quote" />
      </Banner>
    </StyledHero>
    <AboutUs />
    <div className="whiteBg">
        <FeaturedWebServices />
    </div>
    <Survey/>
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
