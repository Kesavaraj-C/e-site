import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from '../Component/Product/Product'
import Navbar from '../Component/Navbar/Navbar'
import Admin from '../Component/Admin/Admin'
import Cart from '../Component/Cart/Cart'
import Home from '../Component/Home/Home'
import User from '../Component/User/User'

const Routing = () => {
  return (
    <>
        <BrowserRouter> 
        
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/product' element={<Product />} />
                <Route path='/Admin' element={<User/>} />
                <Route path='/cart' element={<Cart/>} />
            </Routes>
        </BrowserRouter>

    </>
  )
}

export default Routing