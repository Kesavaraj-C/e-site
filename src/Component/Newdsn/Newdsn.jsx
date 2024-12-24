import React from 'react'
import animebrg from '../../Assets/Images/Cute-Anime-Boy.png'
import './Newdsn.css'

const Newdsn = () => {

  return (
    <>
        <div className="newdsn-body">
            <div className="newdsn-container">
                <div className="newdsn-imgcontainer">
                    <img src={animebrg} alt="3d img" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Newdsn