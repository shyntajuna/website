import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
function header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
 
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <Link to="/" class="nav-link-active">Home </Link>
        </li>
        <li class="nav-item">
        <Link to="/Project" class="nav-link-active">Project</Link>
        </li>
        <li class="nav-item">
        <Link to="/About" class="nav-link-active">About  </Link>
        
        </li>
        <li class="nav-item">
        <Link to="/Contact" class="nav-link-active">Contact </Link>
        
        </li>
        
      </ul>
    </div>
  </nav>
  )
}

export default header