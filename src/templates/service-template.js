import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import CustomHero from '../components/CustomHero'
import Banner from '../components/Banner'
import Btn from '../components/Btn'
import styles from '../css/servicetemplate.module.css'
import ProjectList from '../components/Projects/ProjectList'
import SEO from '../components/SEO'
import Title from '../components/Title'

const ServiceTemplate = ({ data:{service, projects, defaultBg} }) => {
  const {
    name,
    why,
    img_position,
  } = service.nodes[0].data
  const why_list = why.split('.').filter((item)=>item.length > 0)

  return (
    <Layout>
      <SEO title={name} />
      <CustomHero position={`${img_position}`} img={defaultBg.childImageSharp.fluid}>
        <Banner title={name}>
          <Btn to="/portfolio/" text="View all projects"/>
        </Banner>
      </CustomHero>
      <section className={styles.template}>
        <div className="coloredBg section-center">
          <Title title="The" subtitle="Benefits" />
        <div className={styles.whyList}>
          <ul data-bullet-list>
            {
              why_list.map((s, index) =>{
                return(<li key={index}><p>{s}.</p></li>)
              })
            }
          </ul>
        </div>
        </div>
       <ProjectList projects={projects.nodes}/>
       <div className="whiteBg section-center centered"> <Btn to={`/portfolio/`} text={`View all projects`} colorful color/> </div>
      </section>
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
    defaultBg: file(relativePath: { eq: "background/HomeAlly.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  } 
`
