import React from 'react'
import { Link } from 'gatsby'
import Navbar from './Navbar'
import Footer from './Myfooter'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
