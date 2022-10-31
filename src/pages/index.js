import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import FullSeo from '../components/FullSeo'
import Banner from '../components/Hero/Banner'
import LatestApps from '../components/HomeAndAbout/LatestApps'

import AboutKate from '../components/HomeAndAbout/AboutKate'

const IndexPage = ({ data, className }) => {
  return (
    <Layout>
      <article className={className}>
        <FullSeo
          title={'Kate Mills - Web Developer'}
          image={data.defaultBg.childImageSharp.fluid.src}
        />

        <Banner
          color={`var(--clr-primary-dark)`}
          title={'Kate Mills - San Francisco, Bay Area'}
          showTyping={true}
        ></Banner>

        <div id="kate-mills-container">
          <AboutKate />
        </div>

        <div id="latest-apps-container">
          <LatestApps />
        </div>
      </article>
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
  #latest-apps-container{
    background: #d4d4d4;
    margin-top: 1.5rem;
    padding: 2rem;
  }
  @media (min-width: 768px) { }
`
