import React from 'react'
import styles from '../css/footer.module.css'
import links from '../constants/links'
import socialIcons from '../constants/social-icons'
//import AniLink from "gatsby-plugin-transition-link/AniLink";
import {Link} from 'gatsby'

const Footer = () => {
  return (
    <>
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((item, index) => {
          return (
            <Link  className={styles.textLink} key={index} fade to={item.path} >
              {item.page}
            </Link>
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
      <div className={styles.smallFont}></div>
    </>
  )
}

export default Footer
