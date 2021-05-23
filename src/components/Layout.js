/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React from 'react'
import Navbar from './Nav/Navbar'
import Footer from './Footer'
import ScrollButton from './ScrollButton'

import  FadeIn from '../animations/FadeIn'

const Layout = ({children }) => {

  return (
    <>
      <Navbar/>
      <FadeIn className="background-pattern-rain-light">
      {children}
      <ScrollButton/>
      <Footer />
    </FadeIn>
    </>
  )
}

export default Layout
