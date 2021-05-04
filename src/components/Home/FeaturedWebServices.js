import React from 'react'
import Title from '../Title'
import styles from '../../css/featuredwebservices.module.css'
import features from '../../constants/featured-web-services'
import {Link} from 'gatsby'

const Services = () => {
  return (
    <section className={`${styles.services} background-pattern-rain-dark section-center`}
    >
      <Title
        title="Web"
        subtitle="Design"
        subTitleColor="var(--primaryLight)"
      />
      <div className={styles.center}>
        {features.map((item, index) => {
          return (
            <article key={index} className={styles.service}>
              <span>
                <Link to={item.path}>{item.title}</Link>
              </span>
              <div className={styles.underline}/>
              <p className={styles.text}>{item.text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
