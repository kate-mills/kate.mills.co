import React from 'react'
import styles from '../../css/service.module.css'
import { FaMap } from 'react-icons/fa'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const Service = ({ service }) => {
  const { name, starting_price, category, days, slug, images } = service

  return (
    <article className={styles.service}>
      <div className={styles.footer}>
        <div className={styles.bcg}/>
        <div className={styles.info}>
          <h4 className={styles.name}>
            <FaMap className={styles.icon} />
        <AniLink fade to={`/services/${slug}`}>{name} DETAILS</AniLink>
          </h4>

        </div>
      </div>
    </article>
  )
}

export default Service
