import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import HeroShort from '../components/HeroShort'
import Banner from '../components/Banner'
import Btn from '../components/Btn'
import styles from '../css/servicetemplate.module.css'
import SEO from '../components/SEO'
import Title from '../components/Title'
import SearchProjects from '../components/Projects/SearchProjects'
import {typeFormatter} from '../utils/helpers'

const ServiceTemplate = ({ data:{service, projects, defaultBg} }) => {
  const {
    name,
    why,
    meta_desc,
  } = service.nodes[0].data
  const why_list = why.split('.').filter((item)=>item.length > 0)
  const singularName = typeFormatter(name);

  return (
    <Layout>
      <SEO title={name} description={meta_desc}/>
      <HeroShort>
        <Banner title={`Latest Beauty ${singularName}s`} info={`We build websites for spas, salons, estheticians & small businesses in the beauty industry.`}>
          <Btn to="/portfolio/" text="View all projects" borderColor="var(--primaryBlack)" txtColor="var(--primaryWhite)"/>
        </Banner>
      </HeroShort>
      <section className={`${styles.template} section-center`}>
        <div className={`background-pattern-rain-dark ${styles.benefitContainer}`}>
          <Title title={`${why_list.length} benifits of a`} subtitle={singularName} subTitleColor="var(--primaryLight)"/>
        <div className={`${styles.benefitList}`}>
          <ul data-bullet-list>
            {
              why_list.map((s, index) =>{
                return(<li key={index}><p>{s}.</p></li>)
              })
            }
          </ul>
        </div>
        </div>
        <SearchProjects projects={projects.nodes}/>
      </section>
        <div className="footer-btn"><Btn to="/portfolio/" text="view all projects" colorful color/></div>
    </Layout>
  )
}

export default ServiceTemplate

export const getService = graphql`
  query ($slug: String) {
    service:allAirtable(filter: {data: {slug: {eq: $slug}}}) {
      nodes {
        data {
          name
          why
          description
          category
          starting_price
          featured
          slug
          meta_desc
        }
      }
    }
    projects: allAirtable(filter: {table: {eq: "Projects"}, data: {type: {eq: $slug}}}) {
      nodes {
        id
        data {
          type
          slug
          name
          mainImgAlt
          images {
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
