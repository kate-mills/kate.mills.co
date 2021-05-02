import React from 'react'
import Title from './Title'
import styles from '../css/mission.module.css'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Btn from './Btn'

const getKate = graphql`
  query AboutKate {
    aboutKate: file(relativePath: { eq: "katemills.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
const AboutKate = () => {
  const {
    aboutKate: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(getKate)

  return (
    <section className={styles.about}>
      <Title title="time to" subtitle="shine" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img fluid={fluid} alt="Profile photo of website developer Kate Mills, owner of Ally Digital Solutions." />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          
          <p className={styles.heading}>The Journey</p>
          <p>My philosophy is simple: develop beautifully responsive custom websites and social media for salons and spas with exemplary customer service.</p>
          <p>My journey in creating Ally Digital Solutions began in 2020 when I wanted to fulfill what I saw as a need in the beauty industry during the COVID pandemic, to develop websites with an e-commerce component allowing estheticians a safe way to generate income.
          </p>
          <p> My inquisitive nature and passion for learning give me the confidence to never becoming stagnant in my approach to tackling new challenges. Through my innovative web solutions, I will directly build and enhance an everlasting bond between you and your customer.  I firmly believe that you will be proud of your design and enjoy the excellence in the care you receive.
            <span style={{display: 'block',marginTop: '1rem', marginBottom: '1rem' }}>
            Many thanks.
            </span>
            <span style={{display: 'block', marginTop: '0.5rem'}}>
              Kate
            </span>
          </p>
          <Btn to="/contact-us/" color colorful text="Get A Quote" />
        </article>
      </div>
    </section>
  )
}

export default AboutKate
