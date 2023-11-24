import React, { useEffect } from 'react'
import { useState } from 'react'
import { Form ,Button} from 'react-bootstrap'
import { Paper } from '@mui/material'

import Navigation from '../../Navigation'

export default function Agent() {

  const paperStyle={padding:"40px 20px",width:400,margin:"30px auto",background:"lightgrey"}

  return (
    <div className="bg-secondary justify-content-center" style={{width:"1000" , height:"1000"}}>
      
<Navigation/>


<br></br>
<br></br>

<h2 className="text-center mt-2">  <span style={{color:'maroon'}}><b>DREAM</b></span><span style={{color:'green'}}>Lands</span> Agent Dashboard</h2>
<div className="row">
  {/* <div className="col"> */}

<Paper elevation={2} style={paperStyle}>
            <Button variant="outline-success" size="lg" href="/RegList" > <h3>View Registered Users</h3> </Button>
</Paper>

{/* </div><div className="col"> */}

<Paper elevation={2} style={paperStyle}>
            <Button variant="outline-success" size="lg" href="/RegList" > <h3> View Appointments</h3> </Button>
</Paper>
{/* </div><div className="row">
<div className="col"> */}
 <Paper elevation={2} style={paperStyle}>
            <Button  variant="outline-success" size="lg" href="/BookList" ><h3>View Booking List </h3></Button>
</Paper>
{/* </div><div className="col"> */}

<Paper elevation={2} style={paperStyle}>
            <Button variant="outline-success" size="lg" href="/ResList" > <h3> View Land Reserving List</h3> </Button>
</Paper>
{/* </div><div className="row">
<div className="col"> */}
{/* <Paper elevation={2} style={paperStyle}>
            <Button variant="outline-success" size="lg" href="/List" > <h3>Requests of Selling Lands </h3> </Button>
</Paper> */}
{/* </div><div className="col"> */}
<Paper elevation={2} style={paperStyle}>
            <Button variant="outline-success" size="lg" href="/List" > <h3> Update a Land </h3> </Button>
</Paper>

<Paper elevation={2} style={paperStyle}>
            <Button  variant="outline-success" size="lg" href="/updateForm" ><h3>Update my details</h3></Button>
</Paper>


</div>
</div>
// </div>
// </div>



// </div>




  )
}



