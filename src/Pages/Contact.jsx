
import React from 'react'
import Navigation from '../Components/Navigation'
import Footer from '../Components/Footer'
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Box, FormGroup } from '@mui/material';
import { MDBCol, MDBRow } from 'mdb-react-ui-kit';
import LandCarousel from '../Components/LandCarousel';


export default function Contact() {
  return (

    <div>
        <Navigation/>
        <div className="p-1 my-2 bg-white">
        <MDBRow ><MDBCol  className="right mt-3" >

        <Box className="center ml-5 bg-white"
         width={500}
      
        >
        <h1 className="text-italic"> Contact us via..</h1>
        <br/>
        <div>
            <h5 id="hotLine" >Call us by our hot line</h5>
             <Button variant="success" type="call" href="tel:0355682233"> <h5> 011 2255775</h5> </Button>
             <br></br>
             <h5>Email us</h5>
             <Button variant="success" type="email" href="mailto:janashashi5@gmail.com"> <h6> info@dreamlands.lk</h6> </Button>
             <br></br>
             <h5>Address</h5>
               <Button variant="success" href="https://goo.gl/maps/uiSHst9NSS4wLYkW7"> <h6> No 155, New Kandy Road,Kothlawala,Kaduwela</h6> </Button>
               <br></br>
               <br></br>
             <div className=" font-italic">
           <p><h5>Make your Appointment through the <span style={{color:'maroon'}}><b>DREAM</b></span><span
            style={{color:'green'}}> Lands</span>  website, we contact you as soon as possible..
                There you can make some resevations, bookings and contact our site agents by an easy way..</h5>
            </p>
            </div>
            <br/>
            <h5>If you are not registed yet..</h5>
         <h5><a href="/signin" className="link-danger">Sign in</a></h5>
        
            <h4 >Here you can own a land by out website within few minutes.</h4>
            <br/>
            <h5>You can Book a land slot,if you are satisfying...And as a new concept now you can 
              <a href="/reserve" className="link" style={{color:'greenyellow'}}> Reserve</a> land for a considerable time period. </h5>
            <br></br>
            <div className="d-grid gap-2">

              <h4 style={{color:'darkred'}}>After login to your account you are eligible for,</h4>
              
      <Button variant="success" disabled size="lg"  href="/book"><h5>  Book a Land  </h5></Button>
      <br></br>
      <Button variant="success" disabled size="lg" href="/reserve"><h5>  Reserve a Land  </h5> </Button>
    <br></br>
      <Button variant="success" disabled size="lg" href="/sell"><h5>  Sell Your Land for us  </h5> </Button>
      <br></br>
    <Button variant="info" disabled size="lg"  href="/comment"><h5>  Add a Comment </h5></Button>
     
    </div>
            
   </div>

        </Box>
        </MDBCol><MDBCol>
        <img  
          src="/img/contact.jpg" 
           alt="contactUs"
           className="shadow-1-strong rounded left mt-3 mb-3"
          height={750}
          width={500}
            />
        </MDBCol>
        </MDBRow>
        </div>

       
        <LandCarousel/>
        <Footer/>

    </div>

  )
}