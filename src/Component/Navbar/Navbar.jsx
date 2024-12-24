import React ,{ createContext,useEffect,useState } from 'react'
import './Navbar.css'
import { BsPersonFillCheck } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";   
import { IoMdHeartEmpty } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { logDOM } from '@testing-library/react';

export const inans= createContext(); 

const Navbar = () => {

//  const [Search,setsearch]=useState("hii") // this is navbar search

// JavaScript to add a 'sticky' class to the navbar when it becomes sticky


useEffect(() => {
    window.onscroll = function() {stickyNavbar()};
    var navbar = document.querySelector(".navbar-container");
    // console.log(navbar);
    
    var sticky = navbar.offsetTop;
    // console.log(sticky);
    function stickyNavbar() {
        if (window.pageYOffset > sticky) {
          navbar.classList.add("navbar-container-scroll");
        } else {
          navbar.classList.remove("navbar-container-scroll");
        }
      }
}, [onscroll])





return (
    <>
    <nav className='navbar-container'>
        <ul className="navbar-options">
                <a href=""><li>Home</li></a>
                <a href=""><li>Shop</li></a>
                <a href=""><li>pages</li></a>
                <a href=""><li>Blog</li></a>
                <a href=""><li>Contact Us</li></a>
        </ul>
        <div className="nav-logo">
            <h1>BRAND..</h1>
        </div>
        <div className="nav-info">
            <Link to='/Admin'>
                    <BsPersonFillCheck className='nav-info_icons'/>
            </Link>
            <Link to="/product">
                <CiSearch className='nav-info_icons' />
             </Link>

            <IoMdHeartEmpty className='nav-info_icons'/>
            <div className="nav-cart">
                <Link to='/cart'>
                    <IoBagHandleOutline className='nav-info_icons'/>
                    <div className="cart-count">0</div>
                </Link>
            </div>
        </div>

    </nav>
    </>

  )
}

export default Navbar