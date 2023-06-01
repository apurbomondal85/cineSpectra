
import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../Pages/Home/NavBar/NavBar'

function Main() {
  return (
    <div className='container px-lg-5'>
        <NavBar></NavBar>
        <Outlet></Outlet>
    </div>
  )
}

export default Main
