import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import SimpleHero from './SimpleHero'

import './layout.css'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <SimpleHero />
      {children}
      <Footer />
    </>
  )
}

export default Layout
