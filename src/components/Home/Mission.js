import React from 'react'
import Title from '../Title'
import styles from '../../css/mission.module.css'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Btn from '../Btn'

const getAbout = graphql`
  query AboutImg {
    aboutImg: file(relativePath: { eq: "dev-girls/2.png" }) {
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
            We're an independent web development company located in Napa, California, and cater to small businesses in the beauty industry.
            Our custom solutions are designed to highlight your business so you stand out in searches, drive brand awareness, so your clients & potential clients recognize you immediately, and bring more clients to your door.
            We're all about making you look good.
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
