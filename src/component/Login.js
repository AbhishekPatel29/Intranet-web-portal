import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import './Login.css'
import logoWhite from '../images/logo-infobeans-white.svg';
import logoBlack from '../images/logo-infobeans-black.svg';
import axios from 'axios';

// const user={email:"abhishek@gmail.com",password:"Abhishek@123"}


function Login() {
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState('');
  const [passError,setpassError]=useState()

  let history=useHistory();
  if(sessionStorage.token){
    history.push("/")
  }
  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validatePassword(password){
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(password);
}
// email validation using regex
const checkEmail=(e)=>{
  e.preventDefault()
  let email=e.target.value;
  console.log(email.length)
  if(!validateEmail(email)){
    console.log("Invalid Email")
    setIsValid(false);
    setMessage('Please enter a valid email!');
  }
  else{
    console.log("valid Email")
    setIsValid(true);
      setMessage('');
  }
  if(email===0){
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>")
    setMessage('');
  }
}
//password validation using regex
const checkPassword=(e)=>{
  e.preventDefault()
  let password=e.target.value;
  console.log(password)
  if(!validatePassword(password)){
    console.log("Invalid Email")
    setIsValid(false);
    setpassError('Invalid Password min 8 letter password, with at least a symbol, upper and lower case letters and a number');
  }
  else{
    console.log("valid Email")
    setIsValid(true);
      setpassError('');
  }
  if(password===0){
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>")
    setpassError('');
  }
}
const loginCheck=(e)=>{
  e.preventDefault()
  let email=e.target.elements[0].value;
  let password=e.target.elements[1].value;

  axios.post('http://localhost:3005/api/login',{email:email,password:password})
  .then((response)=>{
  console.log(response.data.token)
  if(response.data.token){
    sessionStorage.setItem("token",response.data.token)
    history.push("/membersCorner")
  }
  else{
    alert("invalid credential")
  }

})
  // if(email===user.email && password===user.password){
  //   console.log("true")
  //   sessionStorage.setItem("token",email)
  //    history.push("/membersCorner")
  // }
  // else{
  //   alert("false")
  // }
}
    return (
    
    <div className="logincontainer">
      <div className="header">
        <nav className="navbar sticky-top navbar-light">
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
              <input type="text" className="form-control" placeholder="Your InfoBeans email address" onChange={(e)=>checkEmail(e)} required />
              <div className={`message ${isValid ? 'success' : 'error'}`}>
        {message}
      </div>
            </div>
          </div>
          <div className="form-field">
            <label className="form-label stretch"
              >Password &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="#">Forgot?</a></label>
            <div className="form-field">
                 <input type="password"  className="form-control" placeholder="Your password" onChange={(e)=>checkPassword(e)} required />
                <div className={`message ${isValid ? 'success' : 'error'}`}>
                {passError}
                </div>
            </div>
          </div>
          <div className="form-field">
                    <button id="button" className="button inverse full-width" >Login to Intranet Portal</button>
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
