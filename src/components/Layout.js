import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

import "fontsource-montserrat";
import "fontsource-playfair-display-sc";

import './layout.css'

const Layout = ({children }) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}

export default Layout
