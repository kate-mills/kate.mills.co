import React from 'react'
import styles from '../../css/aboutus.module.css'
import services from '../../constants/services'

const AboutUs = () => {
  return (
    <section className={styles.aboutus}>
      <h2 className="banner-h2">Give Your Business a Competitive Advantage with a Professionally Done Website.</h2>
      <div className={styles.center}>
        {services.map((item, index) => {
          return (
            <article key={index} className={styles.service}
              data-sal="zoom-in"
              data-sal-easing="ease"
              data-sal-duration="500">
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
