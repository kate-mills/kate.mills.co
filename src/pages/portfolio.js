import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import Banner from '../components/Hero/Banner'
import SearchProjects from '../components/Projects/SearchProjects'
import Btn from '../components/Btn'
import FullSeo from '../components/FullSeo'
import WebPackages from '../components/HomeAndAbout/WebPackages'


const portfolio = ({ data }) => {
  const {
    projectTable: { nodes: projects },
    packageTable: { nodes: allypackages },
  } = data
  return (
    <Layout>
      <FullSeo title="Portfolio" 
        description={`We specialize in websites & social media content for small beauty businesses. Learn more about boosting your business in ${new Date().getFullYear()} now.`}
      />
      <Banner title="Web Designs" info="Browse through some of our latest websites." className=""/>
      <section className="section section-center" style={{marginTop: 0, paddingTop: '1rem'}}>
      <SearchProjects projects = {projects} showSearchBtns />
    </section>
      <WebPackages packages={allypackages} cls={""} name={'Digital'}/>

      <div className="footer-btn">
        <Btn to="/contact-us/" text="contact us" bgColor="dark"/>
      </div>
    </Layout>
  )
}
export default portfolio

export const query = graphql`
  query {
    projectTable:allAirtable(
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
  packageTable: allAirtable(filter: {table: {eq: "Packages"}}, sort: {fields: data___number, order: ASC}) {
    nodes {
      id
      data {
        name
        service
        price
        priceInfo
        slugs
        details
        detailsInfo
        note
      }
    }
  }
  }
`
