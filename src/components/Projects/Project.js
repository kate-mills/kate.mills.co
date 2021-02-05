import React from 'react'
import Image from 'gatsby-image'
import styles from '../../css/project.module.css'
import { useStaticQuery, graphql, Link } from 'gatsby'

const getDefaultImg = graphql` {
    file(relativePath: { eq: "background/Napa.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Project = ({ project }) => {
  const data = useStaticQuery(getDefaultImg)
  const defaultImg = data.file.childImageSharp.fluid
  const { type, slug, images } = project

  let mainImage = images ? images.localFiles[0].childImageSharp.fluid : defaultImg

  return (
    <article className={styles.project}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt="single project" />
        <Link to={`/${type}/${slug}`} className={styles.link}>
          details
        </Link>
      </div>
    </article>
  )
}

export default Project
