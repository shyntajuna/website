import React from 'react'
import './AboutDoux.css'
import Pic1 from "../assets/Img2.jpg"
import Pic2 from "../assets/Img3.jpg"
const AboutDoux = () => {
  return (
    <div className='about'>
        <div className='right'>
            <h1>Where Doux Cravings Started?</h1>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                mollit anim id est laborum.</p>
        </div>
        <div className='right'>
            {/* <div className='img-container'>
                <div className='top'>
                    <img src ={Pic1}  className="img" alt="true" />
                </div>
    
                <div className='bottom'>
                    <img src ={Pic2}  className="img" alt="true" />
                </div> */}

                <h1>History</h1>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                mollit anim id est laborum.</p>
            </div>
        </div>

  )
}

export default AboutDoux