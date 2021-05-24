import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './ContactForm.css'
import Navbar from './Navbar'

function ContactForm() {
const [file,setfile]=useState([])
// useEffect(()=>{},[])
  const contact=(e)=>{
    e.preventDefault()

  console.log(e.target[4].files[0])
    
   if(e.target[4].files[0].name){
    const data =new FormData()
    data.append("firstname",e.target[0].value)
    data.append("lastname",e.target[1].value)
    data.append("email",e.target[2].value)
    data.append("description",e.target[3].value)
    data.append("file",file)
  
    console.log(data)
    //api to see form data
    // axios.post("https:httpbin.org/anything", data).then(
    //     (response) => {
    //       console.log(response);
    //     },
    //     (error) => console.log(error)
    //   );

 
      axios.post('http://localhost:3005/api/contactus',data)
      .then((res)=>{
        console.log(res.data)
    })}
    }
const updatefile=(e)=>{
e.preventDefault()
console.log(e.target.files[0])
setfile(e.target.files[0])
}
    return (<>
      <Navbar/>
      <div className="container" id="contact-container">
        <h3>Contact Us</h3>
        <form   className="form" onSubmit={contact} encType="multipart/form-data">
          <div>
            <label for="formControlInput" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              required
            />
          </div>
          <div>
            <label for="formControlInput" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              required
            />
          </div>
          <div>
            <label for="formControlInput" className="form-label">
              Email
            </label>
            <input type="text" className="form-control" placeholder="email" required />
          </div>
          <div>
            <label for="formControlInput" className="form-label">
              Description
            </label>
            <textarea className="form-control" placeholder="description" id="floatingTextarea" style={{"height": "100px"}} required></textarea>
          </div>

          <div>
            <label for="formFile" className="form-label text-start">
              Default file input
            </label>
            <input className="form-control" type="file" id="formFile" onChange={updatefile} />
          </div>

          <div className="submitbutton">
            <button type="submit" id="submitbtn" class="btn btn-outline-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
      </>
    );
}

export default ContactForm
