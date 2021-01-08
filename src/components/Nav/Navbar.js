import React, { useState } from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink/Fade'
import styles from '../../css/navbar.module.css'
import { FaAlignRight } from 'react-icons/fa'
import links from '../../constants/links'
import logo from '../../../static/logo.svg'
import PhoneNumber from '../PhoneNumber'
import {useGlobalContext} from '../../context/context'

const Navbar = (props) => {
  const {openSidebar, closeSidebar, openSubmenu, closeSubmenu} = useGlobalContext()

  const [isOpen, setIsOpen] = useState()
  const toggleNav = () => {
    setIsOpen(isOpen => !isOpen)
  }
  const [isCurrentPage, setCurrentPage] = React.useState('/')


  const displaySubmenu = (e)=>{
    const page_name = e.target.textContent;           // I get this text
    const tempBtn = e.target.getBoundingClientRect(); // I get object with coordinates
    const center = (tempBtn.left + tempBtn.right)/2; // center of anilink
    const bottom = (tempBtn.bottom - 3);             // bottom of anilink - 3px
    openSubmenu(page_name, {center, bottom});
  };

  React.useEffect(()=>{
    typeof window !== `undefined` && setCurrentPage(document.location.pathname);
  }, [setCurrentPage])

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <AniLink fade to={`/`}><img width="211" height="40" src={logo} alt="logo" /></AniLink>
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
                  onMouseOver={displaySubmenu}
                  className={
                    (isCurrentPage === item.path)
                      ? `${styles.currentPage}`
                      : `${styles.notCurrentPage}`
                  }
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
