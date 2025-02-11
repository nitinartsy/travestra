import React from 'react'
import styles from './bgwrapper.module.css'
import Navbar from '../Navbar'
import Footer from '../Footer'

const BgWrapper = ({children}) => {
  return (
    <>
       <Navbar/>
       {children}
       <Footer/>
    </>
  )
}

export default BgWrapper