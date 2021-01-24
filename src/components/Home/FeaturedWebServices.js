import React from 'react'
import Title from '../Title'
import styles from '../../css/featuredwebservices.module.css'
import features from '../../constants/featured-web-services'
import AniLink from 'gatsby-plugin-transition-link/AniLink/Fade'
import Btn from '../Btn'

const Services = () => {
  return (
    <section className={styles.services}>
      <Title
        title="Featured"
        subtitle="Services"
      />
      <div className={styles.center}>
        {features.map((item, index) => {
          return (
            <article key={index} className={styles.service}>
              <span>{item.icon}</span>
              <AniLink fade to={`/${item.path}/`}><div>{item.title}</div></AniLink>
              <p>{item.text}</p>
            </article>
          )
        })}
      </div>
      <div className={styles.footer}>
      <Btn to="/portfolio/" text="View Our Portfolio" color="var(--primaryColor)" colorful/>
      </div>
    </section>
  )
}

export default Services
