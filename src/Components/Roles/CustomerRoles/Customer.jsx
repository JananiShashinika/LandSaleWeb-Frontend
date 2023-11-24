import React, { useEffect } from 'react'
import { useState } from 'react'
import { Form ,Button} from 'react-bootstrap'
import { Paper } from '@mui/material'

import Navigation from '../../Navigation'

export default function Customer() {

  const paperStyle={padding:"40px 20px",width:400,margin:"30px auto",background:"lightgrey"}

  return (
    <div className="bg-secondary justify-content-center" style={{width:"1000" , height:"1000"}}>
      
<Navigation/>


<br></br>
<br></br>

<h2 className="text-center mt-2">  <span style={{color:'maroon'}}><b>DREAM</b></span><span style={{color:'green'}}>Lands</span> Customer Dashboard</h2>
<div className="row">


<Paper elevation={2} style={paperStyle}>
            <Button variant="outline-success" size="lg"  href="/book"><h3>  Book a Land  </h3> </Button>
</Paper>

<Paper elevation={2} style={paperStyle}>
            <Button variant="outline-success" size="lg" href="/reserve"><h3>  Reserve a Land </h3> </Button>
</Paper>

<Paper elevation={2} style={paperStyle}>
            <Button variant="outline-success" size="lg" href="/comment"><h3>  Add a Comment </h3> </Button>
</Paper>

<Paper elevation={2} style={paperStyle}>
            <Button variant="outline-success" size="lg" href="/sell"><h3>  Sell Your Land for us  </h3> </Button>
</Paper>
<Paper elevation={2} style={paperStyle}>
            <Button  variant="outline-success" size="lg" href="/updateForm" ><h3>Update my details</h3></Button>
</Paper>


</div>
</div>




  )
}



