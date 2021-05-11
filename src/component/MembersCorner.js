import React from 'react'
import { useHistory } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './MemberCorner.css'

import MemberCard from './MemberCard';



function MembersCorner() {
    let history=useHistory()
    if(!sessionStorage.token){
        history.push("/login")
      }
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
        <div>
         <div clasName="container">
      <div clasName="col-md-12">
          <h2 className="text-white align-left">Member's Corner</h2>
      </div>
      <OwlCarousel className='owl-theme' {...values} >
      <MemberCard/>
      <MemberCard/>
      <MemberCard/>
      <MemberCard/>
      <MemberCard/>
      <MemberCard/>
      <MemberCard/>
      <MemberCard/>
      </OwlCarousel>
    
  </div>

   
        </div>
    )
}

export default MembersCorner
