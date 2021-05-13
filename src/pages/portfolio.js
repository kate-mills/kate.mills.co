import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import CustomHero from '../components/CustomHero'
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
      <CustomHero>
        <Banner title="Latest Web Designs" info="Browse through some of our favorites."/>
      </CustomHero>
    <section className="section">
      <SearchProjects projects = {projects} showSearchBtns />
    </section>
      <div className="footer-btn"><Btn to="/contact-us/" text="contact us" colorful color/></div>
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
