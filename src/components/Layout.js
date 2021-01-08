import React from 'react'

import Navbar from './Nav/Navbar'
import NavSubmenu from './Nav/Submenu'
import Footer from './Footer'

const Layout = ({children }) => {
  return (
    <main>
      <Navbar />
      <NavSubmenu/>
      {children}
      <Footer />
    </main>
  )
}

export default Layout
