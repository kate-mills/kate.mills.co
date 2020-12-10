import React from 'react'
import Title from '../Title'
import styles from '../../css/featuredwebservices.module.css'
import features from '../../constants/featured-web-services'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const Services = () => {
  return (
    <section className={styles.services}>
      <Title title="Featured" subtitle="Services" />
      <div className={styles.center}>
        {features.map((item, index) => {
          return (
            <article key={index} className={styles.service}>
              <span>{item.icon}</span>
              <AniLink fade to={`/services/${item.path}`}><h4>{item.title}</h4></AniLink>
              <p>{item.text}</p>
            </article>
          )
        })}
      </div>
      <div className={styles.footer}>
      <AniLink fade to="/portfolio" className="btn btn-primary">
        Our Portfolio
      </AniLink>
      </div>
    </section>
  )
}

export default Services
