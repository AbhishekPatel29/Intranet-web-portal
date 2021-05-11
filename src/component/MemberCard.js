import React from 'react'
import img from '../images/member-cornor.png'
function MemberCard() {
    return (
        <>
           <div className="item">
        <div className="card" style={{width: '18rem'}}>
          <img
            src={img}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <div>
              <strong>Abhishek Patel</strong> <small>Presales</small>
              <div>
                <span className="location">Pune</span>
                <span className="date">May,22,2020</span>
              </div>
            </div>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div><span><i className="far fa-thumbs-up"></i>65</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i className="far fa-comment"></i>65</span></div>
            
          </div>
        </div>
      </div> 
        </>
    )
}

export default MemberCard
