import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import CustomHero from '../components/CustomHero'
import styles from '../css/servicetemplate.module.css'
//import Image from 'gatsby-image'
import SEO from '../components/SEO'

const ProjectTemplate = ({ data:{projects}, pageContext  }) => {
  const {
    name,
    images,
  } = projects.nodes[0].data

  console.log('projects', pageContext)

  return (
    <Layout>
      <SEO title={name} />
      <CustomHero position="top center" img={images.localFiles[0].childImageSharp.fluid}/>
      <section className={styles.template}>
      </section>
    </Layout>
  )
}

export default ProjectTemplate

export const getProject = graphql`
  query ($slug: String) {
    projects:allAirtable(filter: {data: {slug: {eq: $slug}}}) {
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
                  srcSet
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
  } 
`
