import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './MemberCorner.css'
import Navbar from './Navbar'
import MemberCard from './MemberCard';
import axios from 'axios';



function MembersCorner() {


    let history=useHistory()
    if(!sessionStorage.token){
        history.push("/login")
      }
     const[member,setmember]=useState([])
     
     useEffect(() => {
         console.log("hello")
        axios({
            method:'get',
            url:"http://localhost:3005/api/getuser",
            headers : {
                'Authorization': `token ${sessionStorage.token }`
            }
        }).then((response)=>{
            console.log(response.data)
            setmember(response.data)
            
        },(error)=>{
            console.log("Error from api",error)
        })
     }, [])
    const values={
           
           nav: true,
           items: 3,
           loop:true,
           responsiveClass:true,
           responsive:{
       0:{
           items:1
       },
       600:{
           items:2
       },            
       960:{
           items:3
       }
       
       }
        }  
       
    return (
        <><Navbar/>
         <div clasName="container" id="container">
      <div clasName="col-md-12">
          <h2 className="text-white align-left">Member's Corner</h2>
      </div>

      {member.length &&<OwlCarousel className='owl-theme' {...values} >
          {member.map((each)=>{
              console.log(each)
              return <MemberCard data={each}/>
          })}
     
      </OwlCarousel>}
    
  </div>

   
        </>
    )
}

export default MembersCorner
