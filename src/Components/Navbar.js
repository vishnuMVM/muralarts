import React from 'react';
import "./Navbar.css";
// import logo from "./m logo.jpg";
import logo from "./logo.png"
import {Link} from "react-router-dom"

export default function Navbar (){

  return(

<nav class="navbar navbar-expand-md navbar-light bg-light shadow">
  <div class="container-fluid">
  <Link class="navbar-brand" to="/">
      <img className='w-100' src={logo} alt="logo" height="100"/>
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item ">
          <Link class="nav-link" to="/our-works">Our Works</Link>
        </li>
        <li class="nav-item ">
          <Link class="nav-link" to="/about">About</Link>
        </li>
        <li class="nav-item ">
          <Link class="nav-link " href="#" tabindex="-1" aria-disabled="true" to="/contactus">Contact Us</Link>
        </li>
      </ul>
    </div>
   
  </div>
</nav> 
 
  )

}