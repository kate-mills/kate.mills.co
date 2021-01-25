import React from 'react'
import Title from '../Title'
import styles from '../../css/featuredwebservices.module.css'
import features from '../../constants/featured-web-services'
import AniLink from 'gatsby-plugin-transition-link/AniLink/Fade'

const Services = () => {
  return (
    <section className={styles.services}>
      <Title
        title="Featured"
        subtitle="Services"
        subTitleColor="var(--primaryLight)"
      />
      <div className={styles.center}>
        {features.map((item, index) => {
          return (
            <article key={index} className={styles.service}>
              <span>{item.icon}</span>
              <AniLink fade to={`/${item.path}/`}><div>{item.title}</div></AniLink>
              <p className={styles.text}>{item.text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
