import React from 'react'
import { BrowserRouter, Link, Outlet } from 'react-router-dom'

const Layout = () => {

  return (
    <>
    <BrowserRouter>
    <ul>
        <li><Link to='/home'>Home</Link></li>
    </ul>
    <ul>
        <li><Link to='/product'>Product</Link></li>
    </ul>
    <Outlet/>
    </BrowserRouter>
    </>
  )
}

export default Layout