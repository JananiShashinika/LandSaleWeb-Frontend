import React, { useEffect } from 'react'
import { useState } from 'react'
import { Form ,Button} from 'react-bootstrap'
import { Paper } from '@mui/material'
import UpdateUserData from './UpdateUserData'
import Navigation from '../../Navigation'

export default function Admin() {

  const paperStyle={padding:"35px 20px",width:380,margin:"30px auto",background:"lightgrey" , border:"rounded"}

  return (
    <div className=" justify-content-center" style={{width:"1000" , height:"1000", background:"whitesmoke"}}>
      
<Navigation/>


<br></br>
<br></br>

<h2 className="text-center mt-2">  <span style={{color:'maroon'}}><b>DREAM</b></span><span style={{color:'green'}}>Lands</span> Admin Dashboard</h2>
<div className="row">
  <div className="col">

<Paper elevation={2} style={paperStyle}>
            <Button variant="outline-success" size="lg" href="/RegList" > <h3>Registered Users</h3> </Button>
</Paper>

</div><div className="col">

<Paper elevation={2} style={paperStyle}>
            <Button variant="outline-success" size="lg" href="/AppList" > <h3>Appointments</h3> </Button>
</Paper>
</div>
<div className="row">
<div className="col">
 <Paper elevation={2} style={paperStyle}>
            <Button  variant="outline-success" size="lg" href="/BookList" ><h3> Booking List </h3></Button>
</Paper>
</div><div className="col">

<Paper elevation={2} style={paperStyle}>
            <Button variant="outline-success" size="lg" href="/ResList" > <h3>Land Reserving List</h3> </Button>
</Paper>
</div><div className="row">
<div className="col">
<Paper elevation={2} style={paperStyle}>
            <Button variant="outline-success" size="lg" href="/List" > <h3>Requests of Selling Lands </h3> </Button>
</Paper>
</div><div className="col">
<Paper elevation={2} style={paperStyle}>
            <Button variant="outline-success" size="lg" href="/List" > <h3>Add a Land </h3> </Button>
</Paper>
<Paper elevation={2} style={paperStyle}>
            <Button  variant="outline-success" size="lg" href="/updateForm" ><h3>Update my details</h3></Button>
</Paper>


</div>
</div>
</div>
</div>



</div>



/* <Form.Group required= "required" controlId="users" className="mt-2 ">  
        <Form.Label ><h4>Get all Registered Users </h4></Form.Label>
          <Form.Control required type="text" placeholder="allUsers" 
          value={Users} 
          onChange={(e)=>setUsers(e.target.value)}
          /> 
          </Form.Group> */
 
   
  )
}



//  ----------------------------------


//   const handleClick=(e)=>{
//     e.preventDefault()
//     // const user_reg ={role,UserName,fullName,password,password_check,address,telephone,email,NIC}
//     // console.log(user_reg)
//     fetch(" http://localhost:8080/api/v1/userRegistration/getData",{
//     method:"GET",
//     headers:{"Content-Type":"application/json"},
//     // body:JSON.stringify(user_reg)
  
// }).then(()=>{
//   console.log("All Users")
// })
//  }