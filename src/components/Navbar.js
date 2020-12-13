import React, { useState } from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink/Fade'
import styles from '../css/navbar.module.css'
import { FaAlignRight } from 'react-icons/fa'
import links from '../constants/links'
import logo from '../images/logo.png'
import PhoneNumber from './PhoneNumber'

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState()
  const toggleNav = () => {
    setIsOpen(isOpen => !isOpen)
  }
  const [isCurrentPage, setCurrentPage] = React.useState('/')



  React.useEffect(()=>{
    typeof window !== `undefined` && setCurrentPage(document.location.pathname);
  }, [setCurrentPage])

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <AniLink fade to={`/`}><img width="243" height="34" src={logo} alt="Ally Digital Solutions Logo" /></AniLink>
          <button type="button" className={styles.toggleBtn} onClick={toggleNav}>
            <FaAlignRight aria-label="Right align" className={styles.toggleIcon} />
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
                <AniLink fade to={item.path}
                  className={
                    (isCurrentPage === item.path)
                      ? `${styles.currentPage}`
                      : `${styles.notCurrentPage}`
                  }
                >
                  {item.text}
                </AniLink>
              </li>
            )
          })}
          <li><PhoneNumber/></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
