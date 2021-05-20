import React from 'react'
import './ContactForm.css'
function ContactForm() {
    return (
      <div className="container">
        <h3>Contact Us</h3>
        <form className="form">
          <div>
            <label for="formControlInput" class="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
            />
          </div>
          <div>
            <label for="formControlInput" class="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
            />
          </div>
          <div>
            <label for="formControlInput" class="form-label">
              Email
            </label>
            <input type="text" className="form-control" placeholder="email" />
          </div>
          <div>
            <label for="formControlInput" class="form-label">
              Description
            </label>
            <textarea class="form-control" placeholder="description" id="floatingTextarea" style={{"height": "100px"}}></textarea>
          </div>

          <div>
            <label for="formFile" class="form-label text-start">
              Default file input
            </label>
            <input class="form-control" type="file" id="formFile" />
          </div>

          <div className="submitbutton">
            <button type="button" class="btn btn-outline-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
}

export default ContactForm
