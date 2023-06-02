
import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../Pages/Home/NavBar/NavBar'
import Footer from '../Pages/Home/Footer/Footer'

function Main() {
  return (
    <div className='container px-lg-5'>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Main
