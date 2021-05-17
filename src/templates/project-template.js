import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Image from 'gatsby-image'
import HeroShort from '../components/HeroShort'
import Banner from '../components/Banner'
import styles from '../css/servicetemplate.module.css'
import SEO from '../components/SEO'
import Btn from '../components/Btn'
//import Title from '../components/Title'

const ProjectTemplate = ({ data:{projects} } ) => {
  const {
    name,
    desc,
    type,
    mainImgAlt,
    url
  } = projects.nodes[0].data

  const [...projectImages] = projects.nodes.map(({data})=>data.images.localFiles[0])

  return (
    <Layout>
      <SEO title={name} />
      <HeroShort>
        <Banner title={name} info={desc || " "}> </Banner>
        </HeroShort>
      <section className={`${styles.template} background-pattern-rain-light`}>
        <p className="centered background-pattern-rain-light" >
          <a href={url} className={`${styles.url}`}>Go to<br/>{name}</a>
        </p>
        <div className={styles.project}>
          <div className={styles.singleProjectImg}>
            {
              projectImages.map((img, index)=>{
                return(
                  <Image
                    key={index}
                    fluid={img.childImageSharp.fluid}
                    alt={mainImgAlt}
                    className={styles.image}
                  />
                )
              })
            }
          </div>
        </div>
        <div className="footer-btn">
          <div className={styles.hideMobile}>
            <Btn to={`/${type}/`} text={`View all ${type}`}/>
          </div>
          <Btn to={`/portfolio/`} text='View all projects'/>
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
          desc
          type
          url
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
          mainImgAlt
          img_position
          starting_price
          featured
          slug
        }
      }
    }
  } 
`
