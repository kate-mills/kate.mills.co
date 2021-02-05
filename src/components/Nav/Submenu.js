import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from '../../context/context'
//import AniLink from 'gatsby-plugin-transition-link/AniLink'
import {Link} from 'gatsby'
import styles from '../../css/submenu.module.css'

const Submenu = () => {
  const {
    isSubmenuOpen,
    closeSubmenu,
    page: { page, links },
    location,
  } = useGlobalContext()
  const container = useRef(null)
  const [columns, setColumns] = useState('colTwo')

  useEffect(() => {
    setColumns('colTwo')
    const submenu = container.current
    const { center, bottom } = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`
  }, [page, location, links])

  return (
   <aside
      className={`${isSubmenuOpen ? `${styles.submenu} ${styles.show}` : `${styles.submenu}`}`}
      ref={container}>
      <section>
        <div className={styles.caret}></div>
        <div className={`${styles.submenuCenter} ${styles[columns]}`}>
          {links.map((link, index) => {
            const { url, label } = link
            return (
              <Link key={index} to={url} className={styles.subLink}
                onClick={closeSubmenu}
              >
                {label}
              </Link>
            )
          })}
        </div>
      </section>
    </aside>
  )
}
export default Submenu
