import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Image from 'gatsby-image'
import CustomHero from '../components/CustomHero'
import styles from '../css/servicetemplate.module.css'
import SEO from '../components/SEO'
import { useGlobalContext } from '../context/context';

const ProjectTemplate = ({ data:{projects} } ) => {
  const { closeSubmenu } = useGlobalContext();
  const {
    name,
    images
  } = projects.nodes[0].data

  const [...projectImages] = projects.nodes.map(({data})=>data.images.localFiles[0])

  return (
    <Layout>
      <SEO title={name} />
      <section className={styles.templateBg} onMouseOver={closeSubmenu}>
        <div className={styles.heroCenter}>
          <h1 className={styles.center}>{name}</h1>
        <div className={styles.singleProjectImg}>
          {
            projectImages.map((img, index)=>{
              return(
                <Image
                  key={index}
                  fluid={img.childImageSharp.fluid}
                  alt=""
                  className={styles.image}
                />
              )
            })
          }
        </div>
        </div>
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
