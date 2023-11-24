import React, { useState } from 'react';
// import { Button } from 'react-bootstrap';
import './offcanvas.css'

// importing material UI components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
	setShowMenu(!showMenu);
  }

  return (
	<>


	<AppBar position="static" style={{background:"lightgrey"}}>
		<Toolbar>
		
		<IconButton onClick={toggleMenu} variant="success" size="lg" marginRight="50px"> <MenuIcon/> 
	  <div className={`offcanvas-menu ${showMenu ? 'show' : ''}`}>
	  <Button variant="outline-danger" className="close-button" onClick={toggleMenu}>
		  X
		</Button>
		<ul >
			<br></br>
		  <li>
			<a href="/Login"><h5>Admin DashBoard</h5></a>
		  </li>
		  <br></br>
		  <li>
			<a href="/Login"><h5>Agent DashBoard</h5></a>
		  </li>
		  <br></br>
		  <li>
			<a href="/Login"><h5>customer DashBoard</h5></a>
		  </li>
		 
		</ul>
		</div>
		</IconButton>
		

		<Typography variant="h6" className="ml-5" 
			component="div" sx={{ flexGrow: 1 }}>
			WelCome to <span style={{color:'maroon'}}><b>   DREAM</b></span><span style={{color:'green'}}>Lands</span>
		</Typography>
		<Button color="inherit">search lands</Button>
		</Toolbar>
	</AppBar>



	
	  {/* <Button onClick={toggleMenu} variant="success" size="sm"> <MenuIcon/> </Button>
	  <div className={`offcanvas-menu ${showMenu ? 'show' : ''}`}>
		<Button variant="outline-dark" className="close-button" onClick={toggleMenu}>
		  close
		</Button>
		<ul>
		  <li>
			<a href="/Agent">Admin DashBoard</a>
		  </li>
		  <li>
			<a href="/Admin">Admin DashBoard</a>
		  </li>
		  <li>
			<a href="/Customer">Customer DashBoard</a>
		  </li>
		</ul> */}
	  
	</>
  );
}

export default Header;