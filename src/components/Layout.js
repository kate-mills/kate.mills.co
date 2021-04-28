import React from 'react'
import Navbar from './Nav/Navbar'
import Footer from './Footer'

const Layout = ({children }) => {
  return (
    <main id="main">
      <Navbar/>
      {children}
      <Footer />
    </main>
  )
}

export default Layout
