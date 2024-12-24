import React from 'react'
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import './Admin.css'
const Admin = () => {

    // const apps = initializeApp();
    // const auth = getAuth();
    // function userverify(e) {
    //   console.log(e.terget.value);
      
    // }
    // const password = 

    // // function userverify(e){
    // //     const email = e.target.value()
    // // }

    // createUserWithEmailAndPassword(auth,)
    //   .then((userCredential) => {
    //     // Signed up 
    //     const user = userCredential.user;
    //     // console.log(email)
    //     console.log(password)
    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // ..
    //   });

  return (
    <>
        <div className="admin-container">
            <div className="admin-panel">
                <h1>Admin Panel</h1>
                <form>
                    <div className="admin-rinfo">
                        <h5>First Name</h5>
                        <input type="text" className='admin-input' />
                        <h5>Last Name</h5>
                        <input type="text" className='admin-input' />
                        <h5>Email</h5>
                        <input type="text" className='admin-input' />
                        <h5>Password</h5>
                        <input type="text" className='admin-input'  />
                        <div className="admin-switch">
                            <button className="admin-confirm">Sign in</button>
                            <button className="admin-confirm">Submit</button>
                        </div>
                    </div>
                </form>     
            </div>
        </div>
    </>
  )
}

export default Admin