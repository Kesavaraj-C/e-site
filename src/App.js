import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import List from './List';
import { useContext, useEffect, useState } from 'react';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import Product from './Component/Product/Product';
import Routing from './Rounting/Routing';
import Layout from './Layout/Layout';
import Admin from './Component/Admin/Admin';
import Newdsn from './Component/Newdsn/Newdsn';
import User from './Component/User/User';
import Check from './Check';
import PrdDetails from './Component/PrdDetails/PrdDetails';



function App() {

//   const [info,setinfo] = useState([])

// // useEffect(()=>{
// //   const fetchdata = async () => {
// //     try {
// //       const data = await axios.get("https://jsonplaceholder.typicode.com/users")
// //       setinfo(data.data)
// //     } catch (error) {
      
// //     };
// //   }
// //   fetchdata()
// //   console.log(fetchdata())
// // }
// //   ,[])

// async function dataurl() {
//   const data = await axios.get('https://jsonplaceholder.typicode.com/users')
//   setinfo(data.data)
// }
// useEffect(()=>{
//   dataurl();
// },[])

//   return (
//     <div className="App">
//       <div className='list-container'>
//           <div className='list-table'>
//             <table>
//               <thead>
//                 <th>ID</th>
//                 <th>NAME</th>
//                 <th>USERNAME</th>
//                 <th>EMAIL</th>
//               </thead>
//               <tbody>
//                {info.map((x)=>{
//                 return(  
//                   <tr key={x.id}>
//                     <td>{x.id}</td>
//                     <td>{x.name}</td>
//                     <td>{x.username}</td>
//                     <td>{x.email}</td>
//                   </tr>
//                 )
//                })}
//                </tbody>
//             </table>
//           </div>
//       </div>
//     </div>
//   ); 

    return(
        <div className='App'>
            <Routing      />

            {/* <Admin/> */}
        </div>
    )

}

export default App;
 