import React from 'react'
import Title from '../Title'
import styles from '../../css/mission.module.css'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const getAbout = graphql`
  query AboutImg {
    aboutImg: file(relativePath: { eq: "background/About.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
const Mission = () => {
  const {
    aboutImg: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(getAbout)

  return (
    <section className={styles.about}>
          <Title title="our" subtitle="mission" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img fluid={fluid} alt="awesome landscape" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>We specialize in beauty</h4>
          <p>
            We intend to deliver our clients innovative and effective web solutions that drive brand awareness and bring new clients to their doors.
          </p>
          <p>While always provide exemplary customer service.</p>
          <AniLink fade to="/contact-us" className="btn btn-primary">contact us
          </AniLink>
        </article>
      </div>
    </section>
  )
}

export default Mission
