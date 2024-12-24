import React, { useEffect } from 'react'
import { useState } from 'react'

const Check = () => {

    const [ans,setans]=useState({
    status1: true,
    status2 : false

})

  const handleclick1= ( )=>{
    setans(c => ({...c,
        status1:false,
        status2:true
    })
    )
}
    const handleclick2= ( )=>{
        setans(c=> ({...c,
            status1:true,
            status2:false
        })
        )
        
  }


  return (
    <>
    
        {!ans.status1 ? ans.status1 : 
        <button onClick={handleclick1}>sign In</button>
        }
        {!ans.status2 ? ans.status2 : 
        <button onClick={handleclick2}>sign Up</button>}
    
    
    </>
  )
}

export default Check