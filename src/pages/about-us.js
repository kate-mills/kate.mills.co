import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import CustomHero from '../components/CustomHero'
import Banner from '../components/Banner'
import AboutUs from '../components/Home/AboutUs'
import Btn from '../components/Btn'
import SEO from '../components/SEO'

export default ({ data }) => (
  <Layout>
    <SEO title="About Us" description="Websites, Blogs, and Social Media for Spas, Salons, and Beauty Businesses. Home office in Napa Valley."/>
    <CustomHero img={data.defaultBg.childImageSharp.fluid}>
      <Banner
        title="Digital by industry experts"
        info="HOME OFFICE IN NAPA VALLEY" >
        <Btn to="/portfolio/" text="View our portfolio"/>
      </Banner>
    </CustomHero>
      <AboutUs />
      <div className="footer-btn">
      <Btn  to="/contact-us/" text="Get a free quote" colorful color="var(--primaryBlack)"/>
      </div>
  </Layout>
)
export const query = graphql`
  query {
    defaultBg: file(relativePath: { eq: "backgrounds/about-hero.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
