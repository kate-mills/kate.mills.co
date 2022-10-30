import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import FullSeo from '../components/FullSeo'
import Banner from '../components/Hero/Banner'
import FourIcons from '../components/HomeAndAbout/FourIcons'

import AboutKate from '../components/HomeAndAbout/AboutKate'

const IndexPage = ({ data, className }) => {
  return (
    <Layout>
      <FullSeo
        title={'Kate Mills - Web Developer'}
        image={data.defaultBg.childImageSharp.fluid.src}
      />
      <div className={className}>
        <Banner
          color={`var(--clr-primary-dark)`}
          title={'Kate Mills - Web Developer'}
          showTyping={true}
          className={className}
        ></Banner>
      </div>
      <AboutKate />
      <FourIcons />
    </Layout>
  )
}
export const query = graphql`
  query {
    defaultBg: file(relativePath: { eq: "kate-mills.jpg" }) {
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
