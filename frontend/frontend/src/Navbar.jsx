import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-white border-bottom sticky-top">
  <div class="container">
    <Link class="navbar-brand" to={"/"}>
        <img src="media/Images/logo.svg" alt="logo" style={{width:"25%"}} />
    </Link>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent" className='mx-2 text-center' >
      <ul class="navbar-nav  mb-2 mb-lg-0">
        <li className='m-2' class="nav-item">
          <Link  class="nav-link" to={"/Signup"}>Signup</Link>
        </li>
        <li className='m-2' class="nav-item">
          <Link class="nav-link" to={"/About"}>About</Link>
        </li>
        <li className='m-2' class="nav-item">
          <Link class="nav-link" to={"/Product"}>products</Link>
        </li>
        <li className='m-2' class="nav-item">
          <Link class="nav-link" to={"/Pricing"}>pricing</Link>
        </li>
        <li className='m-2' class="nav-item">
          <Link class="nav-link" to={"/Support"}>Support</Link>
        </li>
        <li className='m-2' class="nav-item">
          <a class="nav-link" href="#">3dot</a>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
  )
}

export default Navbar