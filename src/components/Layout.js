import React from 'react'
import Navbar from './Nav/Navbar'
import Footer from './Footer'
import ScrollButton from './ScrollButton'

const Layout = ({children }) => {
  return (
    <main className="background-pattern-rain-light">
      <Navbar/>
      {children}
      <ScrollButton/>
      <Footer />
    </main>
  )
}

export default Layout
