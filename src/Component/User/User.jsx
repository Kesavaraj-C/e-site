import React, { useEffect, useState } from "react";
import "./User.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { useStore } from "react-redux";
import axios from "axios";
import { Link, Links, useNavigate, NavLink, Route } from "react-router-dom";

const User = () => {
  const [signup, setsigup] = useState(true);
  const [readgetdata, setreadgetdata] = useState( []) 
  const [responce, setresponce] = useState("")
  const [admindata, setadmindata] = useState({
    name: "",
      email: "",
      password: ""
  });

  function getdata(event) {
    const { name, value } = event.target;
    setadmindata({ ...admindata, [name]: value });
    console.log(admindata);
  }

  async function postdata() {
    try {
      const data = {
        name: admindata.name,
        email: admindata.email,
        password: admindata.password,
      };
      let result = await axios.post("http://localhost:5000/demo/create",data)
      console.log(result);
      // setresponce(result.data.message)
    } catch (error) {
      console.log(error);
      // setresponce(error)
    }
  }
  const navigate = useNavigate(); 
  async function readdata(){
    try {
        const data1 = {
          email : admindata.email,
          password : admindata.password
        }
        console.log("haiiii")
        console.log(admindata.email)
        console.log(data1)
        const indata = await axios.post("http://localhost:5000/demo/login",data1)

        console.log(indata.data.message)
        if (indata.data.message){
          console.log('haiii')
          navigate('/')
        }
    

        // setreadgetdata(indata.data.data[0])
        // console.log(readgetdata.email)
        // if (admindata.email == readgetdata.email && admindata.password == readgetdata.password){
        //     console.log("vaada machan")
        // }

    } catch (error) {
      console.log(error)
    }
  }

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
            <div
              className="user-signIn-container"
              style={signup ? { left: "0%" } : { left: "100%" }}
            >
              <h2>{signup ? "Sign In" : "Sign Up"}</h2>
              <div className="user-signIn-container-link-container">
                <li>
                  <FaFacebookF className="user-link-icons" />
                </li>
                <li>
                  <FaInstagram className="user-link-icons" />
                </li>
                <li>
                  <FaLinkedinIn className="user-link-icons" />
                </li>
                <li>
                  <BiLogoGmail className="user-link-icons" />
                </li>
              </div>
              <div className="user-input-details">
                {!signup && (
                  <input
                    className="user-input-Name"
                    name="name"
                    placeholder="  Name"
                    onChange={getdata}
                  ></input>
                )}
                {/* <input className="user-input-Name" placeholder='  Name' ></input> */}
                <input
                  className="user-input-email"
                  name="email"
                  placeholder="  Email"
                  onChange={getdata}
                ></input>
                <input
                  className="user-input-password"
                  name="password"
                  placeholder="  Password"
                  onChange={getdata}
                ></input>
              </div>

              {signup && (
                <div className="user-signIn">
                  <button onClick={readdata}>Sign In</button>
                </div>
              )}
              {!signup && (
                <div className="user-signIn">
                  <button onClick={postdata}>Sign Up</button>
                </div>
              )}
              <h1>{responce}</h1>
            </div>
              <div
              className="user-notif-container"
              style={
                signup
                  ? { left: "100%", borderRadius: "150px 0px 0px 150px" }
                  : { left: "0%", borderRadius: "0px 150px 150px 0px" }
              }
            >
              <h1>{signup ? "Hello , Friend" : "Welcone Back"} </h1>
              <p>
                {signup
                  ? "Registred your personal details to join your Assosiation"
                  : "Enter your Registred details to Join the Assosiation"}
              </p>
              {signup && (
                <div className="user-signIn">
                  <button onClick={() => setsigup(!signup)}>Sign up</button>
                </div>
              )}
              {!signup && (
                <div className="user-signIn">
                  <button onClick={() => setsigup(!signup)}>Sign in</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
