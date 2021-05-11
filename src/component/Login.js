import React from 'react'
import { useHistory } from "react-router-dom";
import './Login.css'
import logoWhite from '../images/logo-infobeans-white.svg';
import logoBlack from '../images/logo-infobeans-black.svg';

const user={email:"abhishek@gmail.com",password:"abhishek123"}


function Login() {
  let history=useHistory();
  if(sessionStorage.token){
    history.push("/")
  }

const loginCheck=(e)=>{
  e.preventDefault()
  let email=e.target.elements[0].value;
  let password=e.target.elements[1].value;
  if(email===user.email && password===user.password){
    console.log("true")
    sessionStorage.setItem("token",email)
     history.push("/membersCorner")
  }
  else{
    alert("false")
  }
}
    return (
    
    <div className="logincontainer">
      <div className="header">
        <nav className="navbar  navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand text-white" href="#">
              <img
                src={logoWhite}
                alt=""
                width="128"
                height="40"
                className="d-inline-block align-text-down"
              />
              Intranet Portal
            </a>
            <ul className="nav justify-content-end">
              <li className="nav-item text-secondary">
                <i className="fas fa-th fa-2x"></i>
              </li>
              </ul>
          </div>
        </nav>
      </div>
      <div className="loginContainer">
        <div className="loginContent">
          <div className="loginImg">
            <img
              src={logoBlack}
              alt="Infobeans-white"
            />
          </div>
          <form onSubmit={loginCheck}>
          <div className="form-field">
            <label className="form-label">Email</label>
            <div className="form-field">
              <input type="text" className="form-control" placeholder="Your InfoBeans email address" />
            </div>
          </div>
          <div className="form-field">
            <label className="form-label stretch"
              >Password &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="#">Forgot?</a></label>
            <div className="form-field">
              <input type="text"  className="form-control" placeholder="Your password" />
            </div>
          </div>
          <div className="form-field">
                    <button className="button inverse full-width" >Login to Intranet Portal</button>
                </div>
                </form>
        </div>
      </div>
      <div className="footer">
        Footer <div className="footer footeremovepadding text-white text-center">
          &copy; Copyright 2020 InfoBeans. All Rights Reserved.
      </div>
      </div>
    </div>
    
    )
}

export default Login
