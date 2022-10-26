import "./FooterStyles.css"
import React from 'react'
import {FaHome, FaPhone, FaMailBulk, FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa"
const Footer = () => {
  return (
    <div className="foorer">
        <div className="footer-container">
        <div className="left">
            <div className="location">
                <h4><FaHome size={20} style= {{color:"#ffff", marginRight:"2rem" }}/>Address</h4>
                 
            </div>
            <div className="phone">
                <h4><FaPhone size={20} style= {{color:"#ffff", marginRight:"2rem" }}/> 
                Number
                </h4>
                
            </div>
            <div className="email">
               <h4><FaMailBulk size={20} style= {{color:"#ffff", marginRight:"2rem" }}/>
               Email
               </h4> 
               
            </div>
        </div>
        <div className="right">
            <h4>About</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className="social">
            <FaFacebook size={30} style=
             {{color:"#ffff", 
             marginRight:"1rem" }}/>
             <FaTwitter size={30} style=
             {{color:"#ffff", 
             marginRight:"1rem" }}/>
             <FaInstagram size={30} style=
             {{color:"#ffff", 
             marginRight:"1rem" }}/>

            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer