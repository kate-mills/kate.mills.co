import React from 'react'
import Title from '../Title'
import styles from '../../css/mission.module.css'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Btn from '../Btn'

const getAbout = graphql`
  query AboutImg {
    aboutImg: file(relativePath: { eq: "About.jpeg" }) {
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
          <Title title="industry" subtitle="experts" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img fluid={fluid} alt="Profile photo of two developers debugging javascript code." />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          
          <p className={styles.heading}>Salons, Spas, and Professionals</p>
          <p>
            We deliver innovative and effective web solutions that drive brand awareness and bring new clients to your doors.
          </p>
          <p>While always provide exemplary customer service.</p>
          <Btn to="/contact-us/" color colorful text="contact us"/>
        </article>
      </div>
    </section>
  )
}

export default Mission
