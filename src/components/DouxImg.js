import "./DouxImgStyles.css"; 
import IntroImg from "../assets/bg2.jpg"
import React from 'react'
import {Link} from "react-router-dom"; 
function DouxImg() {
  return (
    <div className="doux">
        <div className="mask"> 
        <img className="into-img" src={IntroImg} alt="IntroImg" />
        </div>

        <div className="content">
            <p> 
                Satisfy your sweetest cravings
            </p>
            <h1> DOUX CRAVINGS</h1>
            <div> 
                <Link to="/Project" className="btn">Gallery</Link>
            </div>
            <div> 
                <Link to="/Contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
    
  )
}

export default DouxImg