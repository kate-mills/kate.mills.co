import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import CustomHero from '../components/CustomHero'
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
    img_position,
  } = service.nodes[0].data
  const why_list = why.split('.').filter((item)=>item.length > 0)
  const singularName = typeFormatter(name);

  return (
    <Layout>
      <SEO title={name} description={meta_desc}/>
      <CustomHero position={`${img_position}`} img={defaultBg.childImageSharp.fluid}>
        <Banner title={`Latest Beauty ${singularName}s`}>
          <h2 className={styles.bannerSubheading}>We build websites for spas, salons, estheticians & small businesses in the beauty industry.</h2>
          <Btn to="/portfolio/" text="View all projects" borderColor="var(--primaryBlack)"/>
        </Banner>
      </CustomHero>
      <section className={styles.template}>
        <div className={`coloredBg section-center ${styles.benefitContainer}`}>
          <Title title={`${why_list.length} benifits of a`} subtitle={singularName} subTitleColor="var(--primaryLight)"/>
        <div className={styles.benefitList}>
          <ul data-bullet-list>
            {
              why_list.map((s, index) =>{
                return(<li key={index}><p>{s}.</p></li>)
              })
            }
          </ul>
          <p className={styles.metaDescription}>{meta_desc}</p>
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
    defaultBg: file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  } 
`
