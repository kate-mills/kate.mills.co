import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import Banner from '../components/Banner'
import Mission from '../components/Home/Mission'
import Btn from '../components/Btn'
import FeaturedWebServices from '../components/Home/FeaturedWebServices'
import SEO from '../components/SEO'
import Survey from '../components/Survey'

export default ({ data }) => (
  <Layout>
    <SEO title="Home"/>
    <StyledHero img={data.defaultBg.childImageSharp.fluid}>
      <Banner
        title="Web solutions for beauty specialists"
        info="GET WEBSITES CREATED BY INDUSTRY EXPERTS" >
        <Btn to="/contact-us/" text="Get A Free Quote" />
      </Banner>
    </StyledHero>
    <Mission />
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
    defaultBg: file(relativePath: { eq: "backgrounds/home-hero.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
