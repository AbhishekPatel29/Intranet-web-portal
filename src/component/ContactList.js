import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './ContactList.css'
import Navbar from './Navbar'



function ContactList() {
   
    const [contact,setcontacts]=useState([])
    useEffect(()=>{
        axios({
            method:'get',
            url:"http://localhost:3005/api/getContactUs",
            
        }).then((response)=>{
            console.log(response.data)
            setcontacts(response.data)
            
        },(error)=>{
            console.log("Error from api",error)
        })
    
    },[])
    return (
      <>
      <Navbar/>
        <div id="container" className="container">
            <table className="table table-hover table-bordered">
  <thead>
    <tr class="table-dark">
     
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Description</th>
      <th scope="col">File</th>
    </tr>
  </thead>
  <tbody>
    {contact.map((each)=>{
       return( 
       <tr class="table-light">
      
      <td>{each.firstname}</td>
      <td>{each.lastname}</td>
      <td>{each.email}</td>
      <td>{each.description}</td>
      <td>{each.file}</td>
    </tr>)
    })}
    
 
  </tbody>
</table>
        </div>
        </>
    )
}

export default ContactList