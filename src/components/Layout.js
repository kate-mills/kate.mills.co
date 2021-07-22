/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React from 'react'
import Navbar from './Nav/Navbar'
import Footer from './Footer'
import ScrollButton from './ScrollButton'

import  FadeIn from './Animations/FadeIn'
import "@fontsource/oswald"

const Layout = ({children }) => {

  return (
    <>
      <Navbar/>
      <FadeIn>
      {children}
    </FadeIn>
      <ScrollButton/>
      <Footer />
    </>
  )
}

export default Layout
