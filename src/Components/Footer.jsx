import React from 'react';
import  {CDBBox, CDBFooter, CDBFooterLink, CDBBtn, CDBIcon } from 'cdbreact';
import Carousel from 'react-bootstrap/Carousel';
import { LabelImportant } from '@mui/icons-material';
import Email from './Service/Email';

export const Footer = () => {
  return (
    <div className="bg-success" style={{color:"whitesmoke"}}>
    <CDBFooter className="shadow">
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: "90%"}}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap text-white">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0">

            <Carousel> <Carousel.Item>
              <img alt="house" src="/img/houseiconfooter.png" width="50px" />
              <span className="ml-3 h5 font-weight-bold text-white" style={{color:"whitesmoke"}}> Dream Lands</span>
              </Carousel.Item>
              </Carousel>
            </a>
            <p className="my-3" style={{width: '250px' }}>
                We are dedicated to create a better place on earth
            as per our clients' desires and requirements.
            We value their perceptions while relying on our values..
            </p>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' ,color:"whitesmoke"}}>
            <span style={{color:'maroon'}}><b>Dream</b></span><span style={{color:'green'}}>Lands</span> 
            </p>
            <CDBBox flex="column" variant="secondary"  display="flex" style={{ cursor: "pointer", padding: "0"}}>
              <CDBFooterLink href="/">Resources</CDBFooterLink>
              <CDBFooterLink href="/aboutus">About Us</CDBFooterLink>
              <CDBFooterLink href="/contact">Contact</CDBFooterLink>
              <CDBFooterLink href="/">Blog</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Help
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: "pointer", padding: "0"}}>
              <CDBFooterLink href="/">Support</CDBFooterLink>
              <CDBFooterLink href="/signin">Sign In</CDBFooterLink>
              <CDBFooterLink href="/login">Log In</CDBFooterLink>
              <CDBFooterLink href="/contact">Appointment</CDBFooterLink>
            </CDBBox>
          </CDBBox>

          <CDBBox>
             <p className="h4 mb-4" style={{ fontWeight: '600' }}>
              Get Your <span class="text-warning">Dream Land</span><br/> <h3><t/>Today ! </h3></p>
             <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              {/* <CDBFooterLink href="/">Windframe</CDBFooterLink>
              <CDBFooterLink href="/">Contrast</CDBFooterLink> */}
            </CDBBox>

            <CDBBox  display="flexbox" flex-direction= "column"style={{ cursor: "pointer", padding: "0"}}>
              <CDBFooterLink  href="tel:035568233"><h5 style={{ color:"ghostwhite" }}>Call us.. </h5></CDBFooterLink>

            </CDBBox>

          </CDBBox>
          </CDBBox>  


        <CDBBox
          display="flex"
          justifyContent="center"
          style={{ width: '100%' }}
          className="mx-auto mt-4"
        >
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="facebook-f  " />
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
            <CDBIcon fab icon="twitter " />
           
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="instagram " />
          </CDBBtn>
        </CDBBox>
        <small className="text-center mt-5 color-dark">&copy; Dream Lands, 2022. All rights reserved.</small>
      </CDBBox>
    </CDBFooter>
       
    </div>
  );
  
};

export default Footer;