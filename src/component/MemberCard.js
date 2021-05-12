import React from 'react'
import img from '../images/member-cornor.png'
function MemberCard() {
    return (
        <>
           <div class="item">
        <div class="card" style={{width: '18rem'}}>
          <img
            src={img}
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <div>
              <strong>Abhishek Patel</strong> <small>Presales</small>
              <div>
                <span class="location">Pune</span>
                <span class="date">May,22,2020</span>
              </div>
            </div>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div><span><i class="far fa-thumbs-up"></i>65</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i class="far fa-comment"></i>65</span></div>
            
          </div>
        </div>
      </div> 
        </>
    )
}

export default MemberCard
