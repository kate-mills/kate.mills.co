/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react'
import Navbar from './Nav/Navbar'
import Footer from './Footer'
import ScrollButton from './ScrollButton'
import { useGlobalContext } from '../context/context';

const Layout = ({children }) => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <>
      <Navbar/>
      <main className="background-pattern-rain-light"
      onFocus={closeSubmenu}
      onMouseOver={closeSubmenu}
      >
      {children}
      <ScrollButton/>
      <Footer />
    </main>
    </>
  )
}

export default Layout
