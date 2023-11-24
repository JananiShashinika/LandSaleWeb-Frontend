import React from 'react'
import Navigation from '../Navigation'
import { Button } from 'react-bootstrap'
import { Box } from '@mui/material'


export default function BookingSuccess() {
  return (
    <div>
        <Navigation/>
<br/>
<Button  variant="outline-success" size="lg" href='/Book'> Back</Button>
<Box>
        <div style={{color: "black",fontSize:"30px", fontFamily:"monospace" ,fontWeight:"bold",width:"100%",height:"200px",textAlign:"center"}}>
        <span style={{color:'red'}}><h3><b>Your Booking is success !</b></h3></span>
            
            <br></br>
            <h4>Our Land Agent contact you soon..</h4>
            <h2>THANK YOU</h2>

        </div>
        </Box>
    </div>
  )
}
