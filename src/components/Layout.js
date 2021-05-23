/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React from 'react'
import Navbar from './Nav/Navbar'
import Footer from './Footer'
import ScrollButton from './ScrollButton'
import { useGlobalContext } from '../context/context';

import  FadeIn from '../animations/FadeIn'

const Layout = ({children }) => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <>
      <Navbar/>
      <FadeIn className="background-pattern-rain-light"
      onFocus={closeSubmenu}
      onMouseOver={closeSubmenu}
      >
      {children}
      <ScrollButton/>
      <Footer />
    </FadeIn>
    </>
  )
}

export default Layout
