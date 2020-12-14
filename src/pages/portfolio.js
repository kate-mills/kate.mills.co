import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import CustomHero from '../components/CustomHero'
import Banner from '../components/Banner'
import Projects from '../components/Projects'
import Btn from '../components/Btn'
import SEO from '../components/SEO'

const portfolio = ({ data }) => {
  const {
    allAirtable: { nodes: projects },
  } = data
  return (
    <Layout>
      <SEO title="Portfolio" />
      <CustomHero 
        position="99% top"
        img={data.defaultBcg.childImageSharp.fluid}>
        <Banner title="Our Latest Projects" info="Browse through some of our favorites"/>
      </CustomHero>
      <div>
        <div className="center-section">
          <Projects projects = {projects} showSearchBtns />
        </div>
        <div className="footer-btn"><Btn to="/contact-us/" text="contact us" colorful color/></div>
      </div>
    </Layout>
  )
}
export default portfolio

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "background/Portfolio.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    allAirtable(
      filter: { table: { eq: "Projects" } }
      sort: { order: ASC, fields: data___number }
    ) {
      nodes {
        id
        data {
          name
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
