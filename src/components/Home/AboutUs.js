import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Title from '../Title'
import styles from '../../css/services.module.css'
import services from '../../constants/services'

const Services = () => {
  return (
    <section className={styles.services}>
      <Title title="About" subtitle="Us" />
      <div className={styles.center}>
        {services.map((item, index) => {
          return (
            <article key={index} className={styles.service}>
              <span>{item.icon}</span>
              <h4>{item.title}</h4>
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

export default Services
