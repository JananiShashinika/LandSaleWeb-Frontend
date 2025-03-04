// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navigation.css'
import { NavDropdown } from 'react-bootstrap';

import React, { useEffect, useRef, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import {Form,Button,FloatingLabel,} from "react-bootstrap";
import emailjs from "@emailjs/browser";


 
function Navigation() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm( "service_z9askpu", "template_en7b88x", form.current, "szEvKHurwaVIqjiAW9Y_X" )
      .then(
        (result) => {
          console.log(result.text);
          console.log("email sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const heading_style = {color: "#1a0d27",fontWeight: "bold",fontFamily: "initial", textUnderlinePosition: "under",};
  
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true); 
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <div>
  
     <Navbar expand="lg" className={`nav ${isScrolled ? "fixed" : ""}`}>
        < div className='nav' >  
        <Navbar.Brand className="logo" href="tel:0355682233"> <b>Call us..<br/>0112233233</b> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">  Home</Nav.Link>
            <Nav.Link href="/search">  Lands</Nav.Link>
            <Nav.Link href="/aboutus">  About us</Nav.Link>
            <Nav.Link href="/contact">  Contact</Nav.Link>
  
         
            <NavDropdown title="More Services" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/housing"><h5>Housing Plans</h5></NavDropdown.Item>  
            <NavDropdown.Item href="/Customer"><h5>Customer Dashboard</h5></NavDropdown.Item>  
            <NavDropdown.Item href="/appointment"><h5>Request an Appointment </h5></NavDropdown.Item>
            <NavDropdown.Item href="/signin"><h5>Sign in - Register </h5></NavDropdown.Item> 
              </NavDropdown>

              <Nav.Link eventKey={2} onClick={handleShow} style={heading_style}> Email </Nav.Link>
              
          </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>


      <Offcanvas
        show={show}
        onHide={handleClose}
        backdrop="static"
        style={{ color: "darkslateblue" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="mt-5 fw-bold text-decoration-underline">
            Hello there...
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p className="fst-italic mb-4">
            If you need any helps or If you like to share your ideas please
            contact us
          </p>
         
          <Form className="container" ref={form} onSubmit={sendEmail}>
            <Form.Group
              className="mb-4 mx-4 align-content-center"
              controlId="formBasicEmail"
            >
              <Form.Label className="text-center fw-semibold">  Name </Form.Label>
              <Form.Control placeholder="" type="text" name="user_name" />
              
              <Form.Label className="text-center fw-semibold"> Email </Form.Label>
              <Form.Control type="email"  name="user_email" placeholder="example@gmail.com" />
             
              <Form.Text className="text-muted fst-italic fw-lighter">
                We'll never share your email with anyone else.</Form.Text>
           
              <Form.Label className="text-center fw-semibold">  Message </Form.Label>
              <Form.Control placeholder="" type="text" name="message" />
 
            </Form.Group>


            <Button
              variant="outline-primary"
              className="mb-2 col-5"
              style={{ marginLeft: "30%" }}
              onClick={sendEmail}
              type="submit"
              value="Send"
            >
              Send
            </Button>


          </Form>



        </Offcanvas.Body>
      </Offcanvas>







       </div>
       );
}

export default  Navigation;