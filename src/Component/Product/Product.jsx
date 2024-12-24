import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import './Product.css'
import logo from "../../Assets/Images/vector-abstract-company-logo-template-design-illustration.jpg"
import axios from 'axios'
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import {Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {myreducers} from '../Store/Store';

const Product = () => {
const dispatch=useDispatch()
  const[respProduct,setresproduct]=useState([])
  console.log(respProduct)
  const[searchinpt,setsearchinpt]=useState("")
  console.log(searchinpt)
const [mydata, setmydata] = useState([])
  /* this is a add cart usestate function */
    // const[selecteditems,setselecteditems]=useState([])
    // console.log(selecteditems)
    // dispatch(myreducers.addCart(selecteditems))

  async function products() { 
    try{
    const data= await axios.get('https://fakestoreapi.com/products')
    setresproduct(data.data)
  //   let myvalue=data.data
  //   console.log(myvalue);
    
  // dispatch(myreducers.addCart(myvalue))
  // if (searchinpt){
  //   product_body=ToggleEvent.target('.product_body1')
  // }
  }
  catch(err){
    console.log(err);
  }
  
  }


  useEffect(()=>{
    products()
  },[ ])

//   function changestates(data) {
    
//     console.log(data);
//     console.log("lkgndkjbnskjb");
// console.log(respProduct);

//     let mydata=respProduct.filter(function (data) {
//       return data.id==data
//     })
//     console.log(mydata);  
//   }

function getdata(data) {
  console.log(data);
  console.log(respProduct);
  
  let filters=respProduct.filter(function(e) {
    return e.id==data
  })
  console.log(filters);

  setmydata((data)=>[...data,...filters])
  dispatch(myreducers.addCart(respProduct))
  
}
console.log(mydata)
  return (
    <>
    <div className="product-page">
        <div className="searchBar">
            <div className='searchBar-left'>
              <Link to='/'><div className="searchBar-logo"><img src={logo} alt="logo"></img></div></Link> 
              <input type="text" placeholder='Search products' onChange={(e)=>setsearchinpt(e.target.value)} />
            </div>
            <div className="searchBar-right">
              <FaRegHeart className="searchBar-like searchBar-selector" />
              <Link to='/cart'>
                  <FaShoppingCart className="searchBar-cart searchBar-selector" />
              </Link>
              <Link to='/Admin'><MdAccountCircle className="searchBar-account searchBar-selector" /></Link>
            </div>
        </div>
        <div className={searchinpt === '' ? "product_body":"product_body1"} >
          <div className="product-filter">
            <h1>Filter</h1>
            <ul>
              <h2>Brand</h2>
              <li>filter</li>
              <li>filter</li>
              <li>filter</li>
            </ul>
            <ul>
              <h2>Type</h2>
              <li>Low to High</li>
              <li>High to Low</li>
              <li>Ratings</li>
            </ul>
            <ul>
              <h2>Category</h2>
              <li>filter</li>
              <li>filter</li>
              <li>filter</li>
            </ul>
          </div>
          <div className="product-container-product">
            {respProduct.filter((item)=>(
              searchinpt.toLowerCase()=== '' ? item : item.category.toLowerCase().includes(searchinpt)
            )).map((x)=>(
                <>
                
                  <div className='product-container' >
                    <div className="product-container_image">
                          <img src={x.image} alt="" />
                    </div>
                    <div className="product-container_details">
                        {/* <p>{x.category}</p> */}
                        <h4>{x.title}</h4>
                        <p>{x.rating.rate} </p>
                        <div className='product-pricing'><p>${x.price}</p><s>${x.price*2}</s> <div className="product-offer">50%</div></div>
                    </div>
                    <div className="product-container-selected">
                      <FaRegHeart className="searchBar-selected-like searchBar-selector" />
                      <FaShoppingCart className="searchBar-selected-cart searchBar-selector" onClick={()=>getdata(x.id)}/>
                    </div>
                  </div>  
                </>
              ))}
          </div>
          </div>
    </div>
    </>
  )
}

export default Product