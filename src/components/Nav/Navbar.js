import React, { useState } from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink/Fade'
import styles from '../../css/navbar.module.css'
import { FaAlignRight } from 'react-icons/fa'
import links from '../../constants/links'
import logo from '../../images/nav-logo.png'
import PhoneNumber from '../PhoneNumber'
import {useGlobalContext} from '../../context/context'
import NavSubmenu from './Submenu'

const Navbar = (props) => {
  const {  openSubmenu } = useGlobalContext()

  const [isOpen, setIsOpen] = useState()

  const toggleNav = () => {
    setIsOpen(isOpen => !isOpen)
  }

  const displaySubmenu = (e)=>{
    const page_name = e.target.textContent;           // I get this text
    const tempBtn = e.target.getBoundingClientRect(); // I get object with coordinates
    const center = (tempBtn.left + tempBtn.right)/2; // center of anilink
    const bottom = (tempBtn.bottom - 3);             // bottom of anilink - 3px
    openSubmenu(page_name, {center, bottom});
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <AniLink fade to={`/`} className={styles.logo}><img width="211" height="40" src={logo} alt="logo" /></AniLink>
          <button type="button" className={styles.toggleBtn} onClick={toggleNav}>
            <FaAlignRight aria-label="Right align" className={styles.toggleIcon} />
          </button>
        </div>
        <NavSubmenu/>

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
                  onMouseOver={displaySubmenu}
                >
                  {item.page}
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
