import React, { useEffect, useState } from 'react'
import './Cart.css'
import logo from "../../Assets/Images/vector-abstract-company-logo-template-design-illustration.jpg"

import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Cart = () => {
  const selector =useSelector((data)=>{
    return data.datas
  })
const [products, setproducts] = useState([])
  console.log(selector);
  async function product1() {
    const product = await axios.get('https://fakestoreapi.com/products')
    setproducts(product.data)
  }
  useEffect(()=>{
    product1()
  },[ ])
  
  return (
    <>
    <div className="cart-body">
        <div className="cart-container">
            <div className="cart-navbar">
                <div className="cart-navbar-left">
                    <Link to='/'><div className="searchBar-logo"><img src={logo} alt="logo"></img></div></Link>
                    <input type="text" className='cart-search' placeholder='Search Products'/>
                </div>
                <div className="cart-navbar-right">
                <FaRegHeart className="searchBar-like searchBar-selector" />
                <Link to='/cart'>
                    <FaShoppingCart className="searchBar-cart searchBar-selector" />
                </Link>
                <Link to='/Admin'>
                  <MdAccountCircle className="searchBar-account searchBar-selector" />
                </Link>
                </div>
            </div>
            <div className="cart-items-container">
              <div className="cart-items-layout">
              {products.map((x)=>{
              console.log(x)
                    return(
                          <div className="cart-items-selected" key={x.id}>
                            <div className="cart-items-selected-image">
                              <img src={x.image} alt='images'></img>
                            </div>
                            <div className="cart-items-selected-details">
                              <p className='cisdprice'>{x.category}</p>
                              <h2>{x.title}</h2>
                              <span>{x.description}</span>
                              <p className='cisdprice'>$ {x.price} </p>
                              <div className='cart-items-selected-ratings-h'><h3>Ratings</h3>
                              <div className="cart-items-selected-ratings">
                                <c>{x.rating.rate}</c>
                                <s></s> 
                                <br></br>
                                <p>hurry! only {x.rating.count} stock left</p>
                                
                              </div>
                            </div>
                          </div>
                          </div>
                  )
                })}
                
              </div>
            </div>
        </div>  
    </div>
    </>
  )
}

export default Cart