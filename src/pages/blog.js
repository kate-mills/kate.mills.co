import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import StyledHero from '../components/StyledHero'
import BlogList from '../components/Blog/BlogList'

const blog = props => {
  return (
    <Layout>
      <StyledHero img={props.data.blogBcg.childImageSharp.fluid} />
      <BlogList />
    </Layout>
  )
}

export default blog

export const query = graphql`
  query {
    blogBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
