import React, { useEffect, useState } from 'react'
import './User.css'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";



    
const User = () => {

    const [signup,setsigup]=useState(true)

  // const slide = document.querySelector('.user-signIn-container')
  // const Name = document.querySelector('.user-input-Name')
 
  // const signup1 = document.querySelector('.user-signUp')



    // const buttonClick1 =()=>
      // signin.style.display = 'none';
    
    // const buttonClick2=()=>{
    //   // document.querySelector('.user-signIn').style.display = 'none';
    // };
    // useEffect(()=>({
    //   buttonClick1,
    //   buttonClick2
    // },[]))

  return (
    <>
        <div className="User-body">
            <div className="user-container">
              <div className="user-container-design">

             
              <div className="user-signIn-container" style={signup?{left:"0%"}:{left:"100%"}}>
              <h2>{signup ? "Sign In" : "Sign Up"}</h2>
                <div className="user-signIn-container-link-container">
                  <li><FaFacebookF className='user-link-icons'/></li>
                  <li><FaInstagram className='user-link-icons'/></li>
                  <li><FaLinkedinIn className='user-link-icons'/></li>
                  <li><BiLogoGmail className='user-link-icons'/></li>
                </div>
                <div className="user-input-details">
                {!signup &&  <input className="user-input-Name" placeholder='  Name' ></input>}  
                    {/* <input className="user-input-Name" placeholder='  Name' ></input> */}
                  <input className="user-input-email" placeholder='  Email' ></input>
                  <input className="user-input-password" placeholder='  Password' ></input>
                </div>
                
                {signup && <div className="user-signIn"><button  >Sign In</button></div> }
                {!signup &&  <div className="user-signIn"><button  >Sign Up</button></div>}
              </div>
              <div className="user-notif-container" style={signup ? {left:"100%",borderRadius:'150px 0px 0px 150px'} : {left:"0%",borderRadius:"0px 150px 150px 0px"}} >
                  <h1 >{signup ? "Hello , Friend" : "Welcone Back"} </h1>
                  <p>{signup ? "Registred your personal details to join your Assosiation" : "Enter your Registred details to Join the Assosiation"}</p>
                    {signup && <div className="user-signIn"><button onClick={()=>setsigup(!signup)} >Sign up</button></div> }
                    {!signup &&  <div className="user-signIn"><button onClick={()=>setsigup(!signup)} >Sign in</button></div>} 
              </div>

            </div>
            </div>
        </div>
    </>
  )
}

export default User