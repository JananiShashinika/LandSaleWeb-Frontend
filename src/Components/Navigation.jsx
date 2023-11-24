// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navigation.css'
import { NavDropdown } from 'react-bootstrap';

function Navigation() {
  return (
    <div>
     {/* <Navbar   /> */}
      <Navbar fixed="absolute" expand="lg"  >
      {/* bg="white" variant="white" */}
        < div className='nav' >  
        <Navbar.Brand className="logo" href="tel:0355682233"> <b>Call us..<br/>0112233233</b> </Navbar.Brand>
          
          <Nav className="me-auto">
            <Nav.Link href="/home">  Home</Nav.Link>
            <Nav.Link href="/search">  Lands</Nav.Link>
            <Nav.Link href="/appointment">  Appointment</Nav.Link>
            <Nav.Link href="/aboutus">  About us</Nav.Link>
            <Nav.Link href="/signin">Sign in </Nav.Link>
                      
           
         <Nav.Link href="/contact">  Contact</Nav.Link>
         <br></br>   
         <br></br>
            <NavDropdown title="More Services" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/housing"><h5>Housing Plans</h5></NavDropdown.Item>
            <NavDropdown.Item href="/login"><h5> Log in</h5></NavDropdown.Item>  
            <NavDropdown.Item href="/book"><h5>Booking  A Land</h5></NavDropdown.Item>  
            <NavDropdown.Item href="/reserve"><h5>Reserve A Land</h5></NavDropdown.Item>     
            <NavDropdown.Item href="/sellLand"><h5>Sell Your Land</h5></NavDropdown.Item>  
              </NavDropdown>
          </Nav>
        </div>
      </Navbar>
      
       </div>
       );
}

export default  Navigation;