import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import HeroShort from '../components/HeroShort'
import Banner from '../components/Banner'
import SearchProjects from '../components/Projects/SearchProjects'
import Btn from '../components/Btn'
import FullSeo from '../components/FullSeo'

const portfolio = ({ data }) => {
  const {
    allAirtable: { nodes: projects },
  } = data
  return (
    <Layout>
      <FullSeo title="Portfolio" 
        description={` We specialize in websites & social media content for small beauty businesses.  Learn more about boosting your business in ${new Date().getFullYear()} now.`}
      />
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
