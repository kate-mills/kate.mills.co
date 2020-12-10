import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import CustomHero from '../components/CustomHero'
import styles from '../css/template.module.css'
import Image from 'gatsby-image'
import SEO from '../components/SEO'

const ServiceTemplate = ({ data:{services} }) => {
  const {
    name,
    //description, category, featured, slug, starting_price
    images,
    img_position,
  } = services.nodes[0].data

  const [mainImg, ...serviceImages] = images.localFiles

  return (
    <Layout>
      <SEO title={name} />
      <CustomHero position={`${img_position}`} img={mainImg.childImageSharp.fluid}/>
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {serviceImages.map((item, index)=>{
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
    services:allAirtable(filter: {data: {slug: {eq: $slug}}}) {
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
