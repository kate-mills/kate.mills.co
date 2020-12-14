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
      <section>
        <Projects projects = {projects} showSearchBtns />
        <div className="center-text" style={{margin: `1.5rem auto`}}>
          <Btn  text="contact us" colorful color/>
        </div>
      </section>
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
      sort: { order: DESC, fields: data___date }
    ) {
      nodes {
        id
        data {
          name
          date
          type
          image {
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
