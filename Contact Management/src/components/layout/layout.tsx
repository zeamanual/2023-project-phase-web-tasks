import React from 'react'
import './style.css'
import { Outlet } from 'react-router-dom'
const Layout:React.FC  = () => {
  return (
    <div className='home-container'>
      <h2 className='home-container__header' >Contact Management App</h2>
      <Outlet></Outlet>
    </div>
  )
}

export default Layout