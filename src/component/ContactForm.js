import axios from 'axios';
import React from 'react'
import './ContactForm.css'

const contact=(e)=>{
  e.preventDefault()
  let firstname=e.target[0].value
  let lastname=e.target[1].value
  let email=e.target[2].value
  let description=e.target[3].value
  let file=e.target[4].value
  console.log(firstname)
    axios.post('http://localhost:3005/api/contactus',{firstname:firstname,lastname:lastname,email:email,description:description,file:file})
    .then((res)=>{
      console.log(res.data)
  })
  }
function ContactForm() {


    return (
      <div className="container">
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
            />
          </div>
          <div>
            <label for="formControlInput" className="form-label">
              Email
            </label>
            <input type="text" className="form-control" placeholder="email" />
          </div>
          <div>
            <label for="formControlInput" className="form-label">
              Description
            </label>
            <textarea className="form-control" placeholder="description" id="floatingTextarea" style={{"height": "100px"}}></textarea>
          </div>

          <div>
            <label for="formFile" className="form-label text-start">
              Default file input
            </label>
            <input className="form-control" type="file" id="formFile" />
          </div>

          <div className="submitbutton">
            <button type="submit" id="submitbtn" class="btn btn-outline-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
}

export default ContactForm
