import React from 'react'
import Title from '../Title'
import styles from '../../css/featuredwebservices.module.css'
import features from '../../constants/featured-web-services'
//import AniLink from 'gatsby-plugin-transition-link/AniLink'
import {Link} from 'gatsby'

const Services = () => {
  return (
    <section className={`${styles.services} section-center`}>
      <Title
        title="Web"
        subtitle="Design"
        subTitleColor="var(--primaryLight)"
      />
      <div className={styles.center}>
        {features.map((item, index) => {
          return (
            <article key={index} className={styles.service}>
              <span>{item.icon}</span>
              <Link fade to={`/${item.path}/`}><div>{item.title}</div></Link>
              <p className={styles.text}>{item.text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
