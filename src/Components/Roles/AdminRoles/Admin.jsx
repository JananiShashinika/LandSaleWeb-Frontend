import React from 'react'
import { Button } from 'react-bootstrap'
import { Paper } from '@mui/material'
import Navigation from '../../Navigation'
import Header from '../../Header'
import { useNavigate } from 'react-router-dom'

export default function Admin() {

  const paperStyle = {
    padding: "20px", 
    width: 280, 
    margin: "10px", 
    background: "white", 
    borderRadius: "8px", 
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center"
  }
  const navigate = useNavigate(); 

  const handleLogout = () => {
      localStorage.removeItem('jwtToken'); 
      navigate('/login');
  };


  return (
    <>
      <Header/>
      <Navigation />
    
    
    <div className="bg-secondary d-flex flex-column align-items-center" style={{ minHeight: "100vh" }}>
      
      <h2 className="text-center mt-3" style={{ fontSize: "2rem", fontWeight: "bold", color: "#2C3E50" }}>
        <span style={{color: 'maroon'}}>Dream</span><span style={{color: 'green'}}>Lands</span> Admin Dashboard
      </h2>

      <div>
          <Button variant="danger" type="contained" style={{ textAlign:"right" }} onClick={handleLogout}>
          Logout from Admin page
          </Button>
      </div>

      <div className="d-flex flex-wrap justify-content-center mt-4" style={{ maxWidth: "900px" }}>
        {/* <Paper elevation={3} style={paperStyle}>
          <Button variant="outline-success" size="md" href="/RegList" style={buttonStyle}>
            <h4>Registered Users</h4>
          </Button>
        </Paper> */}

        <Paper elevation={3} style={paperStyle}>
          <Button variant="outline-success" size="md" href="/AppList" style={buttonStyle}>
            <h4>Appointments</h4>
          </Button>
        </Paper>

        <Paper elevation={3} style={paperStyle}>
          <Button variant="outline-success" size="md" href="/BookList" style={buttonStyle}>
            <h4>Booking List</h4>
          </Button>
        </Paper>

        {/* <Paper elevation={3} style={paperStyle}>
          <Button variant="outline-success" size="md" href="/ResList" style={buttonStyle}>
            <h4>Land Reserving List</h4>
          </Button>
        </Paper> */}

        <Paper elevation={3} style={paperStyle}>
          <Button variant="outline-success" size="md" href="/List" style={buttonStyle}>
            <h4>Requests of Selling Lands</h4>
          </Button>
        </Paper>

        <Paper elevation={3} style={paperStyle}>
          <Button variant="outline-success" size="md" href="/Admin/AddLand" style={buttonStyle}>
            <h4>Add a Land</h4>
          </Button>
        </Paper>

        <Paper elevation={3} style={paperStyle}>
          <Button variant="outline-success" size="md" href="/Admin/EditLand" style={buttonStyle}>
            <h4>Edit Land Details</h4>
          </Button>
        </Paper>

        <Paper elevation={3} style={paperStyle}>
          <Button variant="outline-success" size="md" href="/updateForm" style={buttonStyle}>
            <h4>Update My Details</h4>
          </Button>
        </Paper>
      </div>
    </div>
    </>
  )
}

const buttonStyle = {
  borderRadius: "5px", 
  width: "100%", 
  padding: "8px", 
  textAlign: "center", 
  fontSize: "1rem", 
  transition: "background-color 0.3s ease",
};





/* <Form.Group required= "required" controlId="users" className="mt-2 ">  
        <Form.Label ><h4>Get all Registered Users </h4></Form.Label>
          <Form.Control required type="text" placeholder="allUsers" 
          value={Users} 
          onChange={(e)=>setUsers(e.target.value)}
          /> 
          </Form.Group> */
 
   
 


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