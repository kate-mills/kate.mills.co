import React from 'react'
import Navbar from './Nav/Navbar'
import Footer from './Footer'

const Layout = ({children }) => {
  return (
    <main className="background-pattern-rain-light">
      <Navbar/>
      {children}
      <Footer />
    </main>
  )
}

export default Layout
