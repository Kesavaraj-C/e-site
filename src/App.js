import React from 'react'
import Routing from "./Rounting/Routing"
import Account from './Component/Account/Account'
import User from './Component/User/User'
import Cart from './Component/Cart/Cart'
import Admin from './Component/Admin/Admin'
const App = () => {
  return (
    <div className='App'>
      {/* <Cart /> */}
        {/* <Account/> */}
        <Routing />
        {/* <Admin/> */}
    </div>
  )
}

export default App