import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import FullSeo from '../components/FullSeo'
import HeroTall from '../components/Hero/Tall'
import Btn from '../components/Btn'
import Banner from '../components/Hero/Banner'
import FourIcons from '../components/HomeAndAbout/FourIcons'
import Contact from '../components/Contact/Contact'

import AboutKate from '../components/HomeAndAbout/AboutKate'

const IndexPage = ({ data, className }) => {
  const title = `Web Developer`
  return (
    <Layout>
      <FullSeo
        title={`${title}`}
        image={data.defaultBg.childImageSharp.fluid.src}
      />
      <div className={className}>
        <Banner
          color={`var(--clr-primary-dark)`}
          title={title}
          showTyping={true}
    className={className}
        >

    </Banner>
        <AboutKate />

        <div className="digital-marketing-services">
          <p className="digital-marketing-services-h2" />
          <FourIcons />
          <p className="digital-marketing-services-h2" />
        </div>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query {
    defaultBg: file(
      relativePath: { eq: "ally-digital-solutions-website-designers.jpg" }
    ) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
export default styled(IndexPage)`
  p.digital-marketing-services-h2 {
    margin: 2.5rem auto;
  }
  @media (min-width: 768px) {
    div.digital-marketing-services {
    }
  }
`
