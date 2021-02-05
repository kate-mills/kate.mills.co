import React from 'react'
import styles from '../css/footer.module.css'
import links from '../constants/links'
import socialIcons from '../constants/social-icons'
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Footer = () => {
  return (
    <>
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((item, index) => {
          return (
            <AniLink  fade className={styles.textLink} key={index} to={item.path} >
              {item.page}
            </AniLink>
          )
        })}
      </div>
      <div className={styles.icons}>
        {socialIcons.map((item, index) => {
          return (
            <a
              key={index}
              aria-label={item.label}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          )
        })}
      </div>
        <p> (707) 266- 8106 </p>
      <div className={styles.smallFont}>
        Copyright &copy; {new Date().getFullYear()} All
        Rights Reserved
      </div>
    </footer>
    </>
  )
}

export default Footer
