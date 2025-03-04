import React from 'react'
import './benefits.css'


export default function Benefits() {
  return (
    <div className="benefits-container">

<div className="benefits-grid">
    <div className ="image-column">
    <img  
          src="/img/benefits.jpg" 
           alt="benefits"
           className="image"
          
            />
    </div>
   
    <div className ="benefits-column">
    <p className="benefits-quote">
            "Buy the best solution and wait for the best to happen. <br />
            We provide you the most sincere real estate experience with our very much flexible services
            to make your desires come true. We follow a friendly manner with our valuable clients,
            the community and the beautiful environment."
          </p>
          
          <p className="benefits-facilities">
            <h5>
              <b>Our Lands are provided best facilities that all you waiting for,</b>
              <ul>
                <li>water</li>
                <li>electricity</li>
                <li>main road</li>
                <li>famous schools and offices</li>
                <li>When we select a land to sell, we consider all the facilities for providing you a best life time experience for your Dream to be came..</li>
              </ul>
            </h5>
          </p>

</div>
        </div>
        </div>

  )
};
