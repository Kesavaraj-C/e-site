import React, { useState } from 'react';
import './Admin.css';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Link, Links, useNavigate, NavLink, Route } from "react-router-dom";


const Admin = () => {
    const [responce, setresponce] = useState("")
    const user = useSelector((state)=>state.accessperson)
    const [inputs, setinputs] = useState({
        username: "",
        email: "",
        password: ""
    });

    function getdata(event) {
        let names = event.target.name;
        let values = event.target.value;
        setinputs({ ...inputs, [names]: values });
    }

    
    // async function submitdata(event) {
        //     event.preventDefault();  // Prevent form default behavior
        //     try {
            //         let data = {
                //             name: inputs.username,  // Ensure correct data is being passed
                //             email: inputs.email,
                //             password: inputs.password
                //         };
                //         console.log(data);
                //         let result = await axios.post("http://localhost:5000/demo/create", data);
                //         console.log(result);
                //        if (result) {
                    //         setresponce(result.data.message)
                    //        }
                    //     } catch (err) {
                        //         console.log(err);
                        //         setresponce(err)
                        
                        //     }
                        // }
    
    const navigate = useNavigate(); 
    async function submitdata(event){
        event.preventDefault();
        try {
            
            let data ={
                name : inputs.username,
                email:inputs.email,
                password:inputs.password
            }
            // console.log(data)
            const admin = user.filter(user => user.email === data.email);
            console.log(admin[0].accesstype);
            const admins = user.filter(user => user.accesstype === 'admin');
                console.log(admins);

            if (admin[0].accesstype === "admin" ){
                console.log("admin")
                navigate('/product')   
            }
            if (admin[0].accesstype === "user"){
                console.log("user")
                navigate("/Cart")
            }


        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="admin-container">
                <div className="admin-panel">
                    <h1>Admin Panel</h1>
                    <form >
                        <div className="admin-rinfo">
                            <h5>Username</h5>
                            <input type="text" name="username" className="admin-input" onChange={getdata} />
                            <h5>Email</h5>
                            <input type="text" name="email" className="admin-input" onChange={getdata} />
                            <h5>Password</h5>
                            <input type="text" name="password" className="admin-input" onChange={getdata} />
                            <div className="admin-switch">
                                <button type="submit" className="admin-confirm" onClick={submitdata}>Submit</button>
                            </div>
                            <h1>{responce}</h1>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Admin;
