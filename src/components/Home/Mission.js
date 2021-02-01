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
      <Title title="time to" subtitle="shine" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img fluid={fluid} alt="Profile photo of two developers debugging javascript code." />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          
          <p className={styles.heading}>About us</p>
          <p>
            We provide web development services to small businesses in the beauty industry.  Our industry-experienced solutions highlight your business, drive brand awareness and bring more clients to your door.
          </p>
          <p>We value a true partnership with all of our clients and treat your success as necessary as our own.
          </p>

          <Btn to="/contact-us/" color colorful text="Free Quote" />
        </article>
      </div>
    </section>
  )
}

export default Mission
