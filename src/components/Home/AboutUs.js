import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Title from '../Title'
import styles from '../../css/aboutus.module.css'
import services from '../../constants/services'

const AboutUs = () => {
  return (
    <section className={styles.aboutus}>
      <Title title="About" subtitle="Us" />
      <div className={styles.center}>
        {services.map((item, index) => {
          return (
            <article key={index} className={styles.service}>
              <span>{item.icon}</span>
              <div>{item.title}</div>
              <p>{item.text}</p>
            </article>
          )
        })}
      </div>
      <div className={styles.buttons}>
      <AniLink fade to="/contact-us" className="btn btn-primary">Get A Free Quote</AniLink>
    </div>
    </section>
  )
}

export default AboutUs
