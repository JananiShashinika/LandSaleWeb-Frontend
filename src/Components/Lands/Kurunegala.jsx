// import React from 'react'
import React from 'react';
import { MDBContainer, MDBCol, MDBRow,} from 'mdb-react-ui-kit';
 import './lands.css'
 import { Button } from 'react-bootstrap';
 import { useState } from 'react';
import Navigation from '../Navigation';
import { orange } from '@mui/material/colors';

export default function Kurunegala() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

   return (  
    <div> 
      <Navigation   /> 
      <br></br>
      <Button  variant="outline-success" size="lg" href='/'> Back</Button>
 <div className='container1'>
 < MDBRow> 
      <MDBCol lg={3} className='mb-4 mb-lg-0'>
      <img  
          src="/img/yakkala.jpg" 
           alt="yakkala"
           className="shadow-1-strong rounded mb-4"
          height={400}
          width={400}
            />
             </MDBCol><MDBCol>
            < div className='details'>
          <h2><span className='text-warning' >Kurunegala - Lake Round</span><br/></h2>
   <h3> <span style={{color:orange}}>Prestige Place</span> </h3>
   <br/><h4>Rs.300,000 - Rs.500,000 Per Perch </h4>
   <br/><h5>Most Suitable for Investments </h5>
      </div>
      </MDBCol>
    </MDBRow>
         </div>
         
             <br></br>
             <div className="container2">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
          > Gallery
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Blocks
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
          > Road Map
        </button>

        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        > Location
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h4>Land Images Colllection </h4>
          <hr />
          <h5>This Land is Located near about 100m for th Ranthaliya Lake.. </h5>
           
         < MDBRow> 
      <MDBCol lg={4} className='mb-4 mb-lg-0'>
      <img
          src="/img/kurunegala/1.jpg"
          className="shadow-1-strong rounded mb-4"
          alt="1" 
          height={400}
          width={500}/>
          </MDBCol><MDBCol>
          <img
          src="/img/kurunegala/2.jpg"
          className="shadow-1-strong rounded mb-4"
          alt="2" 
          height={400}
          width={500}/>
      </MDBCol>
    </MDBRow> <br/>
    < MDBRow> 
    <MDBCol lg={4} className='mb-4 mb-lg-0'>
      <img
         src="/img/kurunegala/3.jpg"
          className="shadow-1-strong rounded mb-4"
          alt="1" 
          height={400}
          width={500}/>
          </MDBCol><MDBCol>
          <img
          src="/img/kurunegala/4.jpg"
          className="shadow-1-strong rounded mb-4"
          alt="2" 
          height={400}
          width={500}/>
      </MDBCol>
      </MDBRow><br/>
      < MDBRow> 
    <MDBCol lg={4} className='mb-4 mb-lg-0'>
      <img
          src="/img/kurunegala/5.jpg"
          className="shadow-1-strong rounded mb-4"
          alt="1" 
          height={400}
          width={500}/>
          </MDBCol><MDBCol>
          <img
          src="/img/kurunegala/6.jpg"
          className="shadow-1-strong rounded mb-4"
          alt="2" 
          height={400}
          width={500}/>
      </MDBCol>
      </MDBRow>
        </div>


        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h4>Block out Plan of the Land</h4>
          <img
          className="block"
          src="/img/2.jpg"
          alt="Block"
          height={500}
          width={800}
          
            
         
          
          />
          
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h4> Road Map for the Land</h4>
          <hr />
           <h5>road map</h5>
            <img
          className="block"
          src="/img/road.jpg"
          alt="Block"
          height={500}
          width={800}
          />          
        </div>


        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <h4 >Land Location</h4>
          {/* <hr /> */}
          <h5>Land location of Kurunegala-Lake Round - Prestige Place </h5>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.7173534214667!2d80.36260977369918!3d7.4964254925158915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae33a029a7e5db5%3A0x69afe692bb40af66!2sLake%20Round%20Kurunegala!5e0!3m2!1sen!2slk!4v1681428315963!5m2!1sen!2slk" 
          width="900"
           height="500"
            style={{border:"0"}} 
            allowfullscreen=""
             loading="lazy" 
             referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div> </div> </div>  
         
  )
  
};
