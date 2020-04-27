import React from 'react'
import Title from '../Title'
import styles from '../../css/about.module.css'
import img from '../../images/defaultBcg.jpeg'

const About = () => {
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="about company"/>
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore the difference</h4>
          <p>I'm baby fam yuccie wayfarers photo booth, iceland glossier single-origin coffee chia cray synth roof party.</p>
          <p>Austin jean shorts cliche food truck bespoke green juice.</p>
          <button type="button" className="btn-primary">read more</button>
        </article>
      </div>
    </section>
  )
}

export default About
