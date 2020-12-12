import React from 'react'
import Title from '../Title'
import styles from '../../css/mission.module.css'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Btn from '../Btn'

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
          
          <p className={styles.heading}>We specialize in beauty</p>
          <p>
            We intend to deliver our clients innovative and effective web solutions that drive brand awareness and bring new clients to their doors.
          </p>
          <p>While always provide exemplary customer service.</p>
          <Btn to="/contact-us/" color='var(--primaryText)' text="contact us" colorful/>
        </article>
      </div>
    </section>
  )
}

export default Mission
