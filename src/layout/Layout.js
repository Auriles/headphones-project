// Layout of Jeader, Footer and Main

import React from 'react'

import Footer from './Footer'
import Header from './Header'

export const Layout = ({children}) => {
  return (
    <>
     <Header/>
     <main>{children}</main>
     <Footer/>
    </>
  )
}
