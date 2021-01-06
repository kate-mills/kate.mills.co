import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import CustomHero from '../components/CustomHero'
import styles from '../css/servicetemplate.module.css'
import Image from 'gatsby-image'
import ProjectList from '../components/Projects/ProjectList'
import SEO from '../components/SEO'

const ServiceTemplate = ({ data:{service, projects} }) => {
  const {
    name,
    images,
    img_position,
  } = service.nodes[0].data

  const mainImg = images.localFiles[3]
  const [...projectImages] = projects.nodes.map(({data})=>data.images.localFiles[0])

  return (
    <Layout>
      <SEO title={name} />
      <CustomHero position={`${img_position}`} img={mainImg.childImageSharp.fluid}/>
      <section className={styles.template}>
       <ProjectList projects={projects.nodes}/>
        <div className={styles.center}>
          <div className={styles.images}>
            {projectImages.map((item, index)=>{
              return (
                <Image
                  key={index}
                  fluid={item.childImageSharp.fluid}
                  alt=""
                  className={styles.image}
                />
              )
            })}
          </div>
        </div>
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
          description
          category
          images {
            localFiles {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          img_position
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
  } 
`
