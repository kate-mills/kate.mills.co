import React from 'react'
import Title from '../Title'
import styles from '../../css/aboutus.module.css'
import services from '../../constants/services'

const AboutUs = () => {
  return (
    <section className={styles.aboutus}>
      <Title title="Shine" subtitle="Online" />
      <div className={styles.center}>
        {services.map((item, index) => {
          return (
            <article key={index} className={styles.service}>
              <span className={styles.icon}>{item.icon}</span>
              <div>{item.title}</div>
              <p>{item.text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default AboutUs
