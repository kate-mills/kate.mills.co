import React from 'react'
import Title from '../Title'
import styles from '../../css/featuredwebservices.module.css'
import {packages} from '../../constants/featured-web-services'
import {Link} from 'gatsby'

const Services = () => {
  return (
    <section className={`${styles.services} background-pattern-rain-dark section-center`}
    >
      <Title
        title="Baisic"
        subtitle="Packages"
        subTitleColor="var(--primaryLight)"
      />
          <p className="we-offer-p">We offer a range of website design solutions for you to choose including Websites and E-Commerce Stores for estheticians, spas, salons, and beauty professionals at a price that fits your budget and delivered promptly.  With our expertise & knowledge of the beauty industry, our design process is straightforward for you.</p>

      <div className={styles.center}>
        {packages.map((item, index) => {
          return (
            <article key={index} className={styles.service}>
              <span>
                <Link to={item.path}>{item.title}</Link>
              </span>
              <span className={styles.price}>{item.price}</span>
              <div className={styles.underline}/>
              <p className={styles.text}>{item.text}</p>
              <p className={styles.text}>
                {item.finePrint}
                {` `}
                {item.finerPrint}
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
