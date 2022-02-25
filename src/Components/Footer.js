import React from 'react';

export default function Footer (){

  return(
<div class="container">

<footer class="text-center text-lg-start" >
  <div class="container d-flex justify-content-center py-5">
    <button type="button" class="btn btn-primary btn-lg btn-floating mx-2">
      <i class="fab fa-facebook-f"></i>
    </button>
    <button type="button" class="btn btn-primary btn-lg btn-floating mx-2">
      <i class="fab fa-youtube"></i>
    </button>
    <button type="button" class="btn btn-primary btn-lg btn-floating mx-2">
      <i class="fab fa-instagram"></i>
    </button>
    <button type="button" class="btn btn-primary btn-lg btn-floating mx-2">
      <i class="fab fa-twitter"></i>
    </button>
  </div>


  <div class="text-center text-white p-3" >
    © 2020 Copyright:
    <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>

</footer>

</div>


  )

}