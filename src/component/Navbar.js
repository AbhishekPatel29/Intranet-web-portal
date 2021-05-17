import React from 'react'
import './Navbar.css'
import logoWhite from '../images/logo-infobeans-white.svg';
import { useHistory } from 'react-router';
function Navbar() {
  let history=useHistory()
 const logout=()=>{
   sessionStorage.clear()
   history.push('/')
 }
    return (
        <>
         <div class="header">
        <nav class="navbar  navbar-light">
            <div class="container-fluid">
              <a class="navbar-brand text-white" href="#">
                <img
                  src={logoWhite}
                  alt=""
                  width="128"
                  height="40"
                  class="d-inline-block align-text-down"
                />
                Intranet Portal
              </a>
              <ul class="nav justify-content-end">
                <li class="nav-item">
                  <a class="nav-link " aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Message Board</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Tides</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Applauds</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Gallery</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Jobs</a>
                  </li>
                  <li class="nav-item">
                  <button type="button" class="btn btn-danger" onClick={logout}>Logout</button>
                  </li>
                  <li class="nav-item text-white">
                    <i class="fas fa-th fa-2x"></i>
                  </li>
              </ul>
            </div>
         
          </nav>
    </div>   
        </>
    )
}

export default Navbar
