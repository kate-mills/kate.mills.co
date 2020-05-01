import React from 'react'
import Image from 'gatsby-image'
import styles from '../../css/tour.module.css'
import {FaMap} from 'react-icons/fa'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import {useStaticQuery, graphql} from 'gatsby'

const getDefaultImg = graphql`
{
  file(relativePath: {eq: "defaultBcg.jpeg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
const Tour = ({ tour }) => {
  const data =  useStaticQuery(getDefaultImg)
  const defaultImg = data.file.childImageSharp.fluid
  const { name, price, country, days, slug, images } = tour

  let mainImage = images ? images[0].fluid : defaultImg
  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt="single tour" />
        <AniLink fade to={`/tours/${slug}`} className={styles.link}>
          details
        </AniLink>
      </div>
      <div className={styles.footer}>
        <h3>{name}</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaMap className={styles.icon}/>
            {country}
          </h4>
        <div className={styles.details}>
          <h6>{days} days</h6>
          <h6>from ${price}</h6>
        </div>
        </div>
      </div>
    </article>
  )
}

export default Tour
