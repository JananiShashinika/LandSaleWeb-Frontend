import React, { useState } from 'react';
import './offcanvas.css';
import AppBar from "@mui/material/AppBar";
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
            <AppBar position="absolute" style={{ background: "lightgrey" }}>
                <Toolbar>
                    <IconButton onClick={toggleMenu} variant="success" size="lg" style={{ marginRight: "50px" }}>
                        <MenuIcon />
                        <div className={`offcanvas-menu ${showMenu ? 'show' : ''}`}>
                            <span 
                                className="close-button" 
                                onClick={toggleMenu}
                                style={{cursor: 'pointer', padding: '5px 10px', border: '1px solid red', borderRadius: '5px', color: 'red'}}
                            >
                                X
                            </span>
                            <ul>
                                <br />
                                <li>
                                    <a href="/Login"><h6>Login to Admin DashBoard</h6></a>
                                </li>
                                <br />
                                <li>
                                    <a href="/Customer"><h6>Customer DashBoard</h6></a>
                                </li>
                                <Button href="/Agent">Agent</Button>
                            </ul>
                        </div>
                    </IconButton>
                    <Typography variant="h6" className="ml-5" component="div" sx={{ flexGrow: 1 }}>
                        <span style={{ color: "black" }}>WelCome to</span> <span style={{ color: 'maroon' }}><b> Dream</b></span><span style={{ color: 'green' }}>Lands</span>
                    </Typography>
                    <Button color="inherit"><span style={{ color: "black" }}>search lands</span></Button>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Header;