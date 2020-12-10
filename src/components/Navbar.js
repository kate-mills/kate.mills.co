import React, { useState } from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import styles from '../css/navbar.module.css'
import { FaAlignRight } from 'react-icons/fa'
import links from '../constants/links'
import logo from '../images/logo.png'
import PhoneNumber from './PhoneNumber'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState()
  const toggleNav = () => {
    setIsOpen(isOpen => !isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <AniLink fade to={`/`}><img src={logo} alt="ally digital solutions logo" /></AniLink>
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>
        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {links.map((item, index) => {
            return (
              <li key={index}>
                <AniLink fade to={item.path}>
                  {item.text}
                </AniLink>
              </li>
            )
          })}
          <PhoneNumber/>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
