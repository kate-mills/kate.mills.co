import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import HeroShort from '../components/HeroShort'
import Banner from '../components/Banner'
import SearchProjects from '../components/Projects/SearchProjects'
import Btn from '../components/Btn'
import SEO from '../components/SEO'

const portfolio = ({ data }) => {
  const {
    allAirtable: { nodes: projects },
  } = data
  return (
    <Layout>
      <SEO title="Portfolio" />
      <HeroShort>
        <Banner title="Latest Web Designs" info="Browse through some of our favorites."/>
      </HeroShort>
    <section className="section">
      <SearchProjects projects = {projects} showSearchBtns />
    </section>
      <div className="footer-btn">
        <Btn to="/contact-us/" text="contact us" bgColor="dark"/>
      </div>
    </Layout>
  )
}
export default portfolio

export const query = graphql`
  query {
    allAirtable(
      filter: { table: { eq: "Projects" } }
      sort: { order: ASC, fields: data___number }
    ) {
      nodes {
        id
        data {
          name
          slug
          date
          type
          mainImgAlt
          images {
            id
            localFiles {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
