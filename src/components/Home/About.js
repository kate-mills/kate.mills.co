import React from 'react'
import Title from '../Title'
import styles from '../../css/about.module.css'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const getAbout = graphql`
  query AboutImg {
    aboutImg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
const About = () => {
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
            <Img fluid={fluid} alt="awesome landscape" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore the difference</h4>
          <p>
            I'm baby fam yuccie wayfarers photo booth, iceland glossier
            single-origin coffee chia cray synth roof party.
          </p>
          <p>Austin jean shorts cliche food truck bespoke green juice.</p>
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
