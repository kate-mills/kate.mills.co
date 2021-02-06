import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import CustomHero from '../components/CustomHero'
import Banner from '../components/Banner'
import Mission from '../components/Home/Mission'
import Btn from '../components/Btn'
import SEO from '../components/SEO'

export default ({ data }) => (
  <Layout>
    <SEO title="About Us" description="Home Office in Napa Valley - Highlight your business with a website, web-store, blog, & more."/>
    <CustomHero img={data.defaultBg.childImageSharp.fluid}>
      <Banner
        title="Digital by industry experts"
        info="HOME OFFICE IN NAPA VALLEY" >
      </Banner>
    </CustomHero>
      <Mission />
      <div className="footer-btn">
        <Btn to="/portfolio/" color colorful text="latest projects"/>
     </div>
  </Layout>
)
export const query = graphql`
  query {
    defaultBg: file(relativePath: { eq: "Hero/13.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
