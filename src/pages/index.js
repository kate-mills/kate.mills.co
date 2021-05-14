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
import styled from 'styled-components'


const IndexPage = ({ data, className }) => {
  const t1=`Boost your beauty business in ${new Date().getFullYear()}`
  const t2=`with a pro website designer.`
  return (
    <Layout>
      <SEO title={`${t1} ${t2}`} image={data.defaultBg.childImageSharp.fluid.src}/>
      <div className={className}>
      <PinkHero>
        <Banner
          title={t1}
          info={t2}>
          <Btn to="/contact-us/" text="Let's Chat" borderColor="var(--solutionsColor)"txtColor="var(--primaryBlack)"/>
        </Banner>
      </PinkHero>
        <AboutUs/>
      <div className="digital-marketing-services">
        {/*<h2 className="banner-h2">Find a Range of Website Design Solutions and Choose One That Fits Your Budget and Goals!</h2>*/}
        <FeaturedWebServices
          data-sal="zoom-out"
          data-sal-easing="ease-out"
          data-sal-duration="500"/>
      </div>
      <Contact/>
      <section className="footer-btn">
        <Btn to="/portfolio/" text="View Our Portfolio" color="var(--primaryColor)" colorful/>
      </section>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query {
    defaultBg: file(relativePath: { eq: "ally-digital-solutions-website-designers.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
export default styled(IndexPage)`
  div.digital-marketing-services{
    h2.banner-h2{
      color: var(--digitalOnBlack);
      margin: 0 auto;
      text-align: center;
    }
  }
`
