import React from 'react'
import img from '../images/member-cornor.png'
function MemberCard(props) {

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
              <strong>{props.data.name}</strong>&nbsp; <small>{props.data.profile}</small>
              <div>
                <span class="location"><i class="fas fa-map-marker-alt"></i>{props.data.location}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span class="date"><i class="far fa-calendar-alt"></i>{props.data.Date}</span>
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
