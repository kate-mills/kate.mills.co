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
        title="Web design for the beauty industry."
        info="Websites, blogs, e-commerce, and more. Elevate your online presence with specialized digital solutions." >
        <Btn to="/contact-us/" text="Contact us" borderColor="var(--primaryBlack)"/>
      </Banner>
    </PinkHero>
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
    defaultBg: file(relativePath: { eq: "primary-pink.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
