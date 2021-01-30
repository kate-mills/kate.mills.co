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
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img fluid={fluid} alt="Profile photo of two developers debugging javascript code." />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          
          <p className={styles.heading}>Stand out online!</p>
          <p>
            We passionately offer web development services to small businesses in the beauty industry that bring more clients to your door and drive brand awareness.
          </p>
          <p>Not just another template, but a site to be proud of, enhances daily operations and will make your business shine.</p>
          <Btn to="/contact-us/" color colorful text="contact us"/>
        </article>
      </div>
    </section>
  )
}

export default Mission
