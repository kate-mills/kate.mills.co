import React, { useState } from 'react'
import {Link} from 'gatsby'
import styles from '../../css/navbar.module.css'
import { FaAlignRight } from 'react-icons/fa'
import links from '../../constants/links'
import logo from '../../images/ally-digital-solutions-logo.png'
import PhoneNumber from '../PhoneNumber'
import {useGlobalContext} from '../../context/context'
import NavSubmenu from './Submenu'

const Navbar = (props) => {
  const {page, isSubmenuOpen, openSubmenu } = useGlobalContext()

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
    <nav className={`${styles.navbar}`}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <Link to={`/`} className={styles.logo}><img width="211" height="43" src={logo} alt="logo" /></Link>
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
              <li key={index}
                className={(isSubmenuOpen&& page.page===item.page)? `${styles.active}`: `${styles.link}`}>
                <Link to={item.path}
                  onMouseOver={displaySubmenu}
                >
                  {item.page}
                </Link>
              </li>
            )
          })}
          <li><PhoneNumber className={styles.phone}/></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
