import React from 'react'
import './benefits.css'
import { Row ,Col,Container} from 'react-bootstrap';
import { MDBContainer,MDBRow,MDBCol } from 'mdb-react-ui-kit';
import SortLands from './SortLands';

export default function Benefits() {
  return (
    <div className="border-inherit" style={{padding:"30px" ,background:"white"}}>

<div className="grid">
    <div className ="column" style={{border:"inherit"}}>
    <img  
          src="/img/benefits.jpg" 
           alt="benifits"
           className="shadow-1-strong rounded center mt-1 mb-3"
          height={550}
          width={500}
            />
    </div>
   
    <div className ="column">
    <p > <h5 style={{color:"darkgreen", fontFamily:"unset"}}>
      <br></br>
                        "Buy the best solution and wait for the best to happen. <br/>
                        We provide you the most sincere real estate experience with our very much flexible services 
                        to make your desires come true. We follow a friendly manner with our valuable clients, 
                        the community and the beautiful environment."</h5>
                      <br/> <t/>
                  
                   <h5><b> Our Lands are provided best facilities that all you waiting for,</b>
                    <ul>
                      water<br/>
                      electricity<br/>
                      main road<br/>
                      famous schools and offices<br/>
                      When we select a land to sell, we consider all the facilities for providing you a best life time experience
                       for your dream to be came..
                    </ul> </h5>
                    </p>
{/* <SortLands/> */}



</div>
        </div>
        </div>

  )
};
{/* <div style={{ width: "450" , justifyContent:"center" }}>
<div class="contact" data-dots></div>
                    <h2 class="mb-30 color-secondary">Facilities We Provide</h2>
                    <p align="justify">
                        "Buy the best solution and wait for the best to happen. 
                        We provide you the most sincere real estate experience with our very much flexible services 
                        to make your desires come true. We follow a friendly manner with our valuable clients, 
                        the community and the beautiful environment."
                    </p>
       
       </div> */}