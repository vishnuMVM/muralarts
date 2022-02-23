import React from 'react';
import "./Navbar.css"

export default function Navbar (){

  return(
<nav class="navbar navbar-expand-lg navbar-light bg-light shadow">
  <div class="container-fluid">
  <a class="navbar-brand" href="#">
      <img  src="https://res.cloudinary.com/lokesh-webdev/image/upload/v1645576939/Mural%20Arts/logo_sjcr6b.png" alt="" height="100"/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link " href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
   
  </div>
</nav>
 
  )

}