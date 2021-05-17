import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import PinkHero from '../components/PinkHero'
import Banner from '../components/Banner'
import AboutUs from '../components/Home/AboutUs'
import FeaturedWebServices from '../components/Home/FeaturedWebServices'
import WebPackages from '../components/Home/WebPackages'
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
          <Link to="/contact-us/" className="btn btn--animated btn--white">Let's Chat</Link>
        </Banner>
      </PinkHero>
      <div className="digital-marketing-services">
        <AboutUs/>
        <FeaturedWebServices
          data-sal="zoom-out"
          data-sal-easing="ease-out"
          data-sal-duration="500"/>
        <WebPackages/>
      </div>
      <Contact/>
      <section className="footer-btn">
        <Link to="/portfolio" className="btn btn--animated btn--white" style={{backgroundColor: 'var(--primaryBlack)', color: 'var(--primaryColor)'}}>View Our Portfolio</Link>
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
      color: var(--primaryBlack);
      text-align: center;
      font-size: 2rem;
    }
    p.we-offer-p{
      letter-spacing: var(--altSpacing);
      width: 80%;
      margin: 1rem auto;
    }
  }
  @media(min-width: 768px){
    div.digital-marketing-services{
      p.we-offer-p{
        width: 50%;
      }
    }
  }
`
