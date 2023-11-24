import React, { useState } from 'react';
import { Button, Form, Card, FormText,Col,Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";

import '../Components/signInAs.css'

const signin= new URL ("../img/signin.jpg" , import.meta.url)


function RegisterForm() {
  const[role,setRole] = useState('')
  const[UserName,setUserName] = useState('')
  const[fullName,setFullName] = useState('')
  const[password,setPassword] = useState('')
 
  const[address,setAddress] = useState('')
  const[telephone,setTelephone] = useState('')
  const[email,setEmail] = useState('')
  const[nic,setNIC] = useState('')

  const handleClick=(e)=>{
    e.preventDefault()
    const user_reg ={role,UserName,fullName,password,address,telephone,email,nic}
    console.log(user_reg)
    fetch("http://localhost:8080/api/v1/userRegistration/addData",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(user_reg)
  
}).then(()=>{
  console.log("New User added")
})
  }


  return (

    <div className="signAs ">
      
    <h1 className="welcome"> Welcome !</h1>
    <p className="sign" >
    <h2 className="text-center mt-2"> Sign In with <span style={{color:'maroon'}}><b>DREAM </b></span><span style={{color:'green'}}>Lands </span> 
 for the Best Experience...  </h2>
    </p>
    

    <Card className="bg-dark text-black">
      <Card.Img src={signin} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title> Register...</Card.Title>
        <Card.Text>
            <div className="Form">
                           
    <div className="pt-4" style={{ height: "900px", marginTop:"4px"}} >
      <Card className="align-items-md-center mt-3" style={{ width: "700px" ,height:"0px" , right:"10px",
      left:"5px",margin:"auto"}}>
        
        <Form >
          <FormText>
            <h3 style={{color: "white",align:"center" }}> Dream Lands - Registration Form</h3>
          </FormText>
          
          <Form.Group required= "required" controlId="signas" className="mt-5">  
          <Form.Label >Sign In As -</Form.Label>
          <Form.Select aria-label="signAs"  value={role} name="role" onChange={(e)=>setRole(e.target.value)}  > 
          <Form.Control required type="text" placeholder="Customer/Agent" 
/>          <option > </option>
            {/* <option >Admin</option> */}
            <option >Customer</option>
            <option >Agent</option>
            

            </Form.Select>
           </Form.Group>

      {/* <Row className="center">
        <Col > */}
        <Form.Group required= "required" controlId="u_name" className="mt-2 ">  
        <Form.Label >User Name</Form.Label>
          <Form.Control required type="text" placeholder="User Name" 
          value={UserName} 
          onChange={(e)=>setUserName(e.target.value)}
          /> 
          </Form.Group>        
        {/* </Col> */}

        {/* <Col className="p-20px"> */}
        <Form.Group required= "required" controlId="full_name" className="mt-2">     
        <Form.Label >Full Name</Form.Label>
          <Form.Control required type="text" placeholder="Full Name"
          value={fullName} 
          onChange={(e)=>setFullName(e.target.value)}
          />
          </Form.Group>
        {/* </Col>
     </Row> */}

          
          <Form.Group required= "required" controlId="p_password" className="mt-2">
            <Form.Label>Password</Form.Label>
            <Form.Control required type="Password" placeholder="Password" 
            value={password} 
            onChange={(e)=>setPassword(e.target.value)}
            />
          </Form.Group>
    
          
          <Form.Group controlId="address" className="mt-2">
            <Form.Label>Address</Form.Label>
            <Form.Control required type="text" placeholder="Address"
            value={address} 
            onChange={(e)=>setAddress(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="phone_no" className="mt-2">
            <Form.Label>Telephone No</Form.Label>
            <Form.Control required type="tel" placeholder="contact" 
            value={telephone} 
            onChange={(e)=>setTelephone(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="p_email" className="mt-2">
            <Form.Label>E-mail</Form.Label>
            <Form.Control required type="email" placeholder="@gmail.com"
            value={email} 
            onChange={(e)=>setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="nic" className="mt-2">
            <Form.Label>NIC</Form.Label>
            <Form.Control required type="NIC" placeholder="NIC"
            value={nic} 
            onChange={(e)=>setNIC(e.target.value)}
            />
          </Form.Group>
          <>
          <Card.Text className="mt-4 " onClick={handleClick}>
            
          <Button  href="/submitRegForm"> Submit </Button>
          <Button style={{marginLeft:"100"}} variant="danger" href="/"> Cancel</Button>
          {/* <Button href="/"> new</Button> */}
        </Card.Text>
          </>

{/*
          <Form.Group className="mt-3 mb-3" id="passenger_form_checkbox">
            <Form.Check
              required
              type="checkbox"
              label="Above details are true."
              feedback="You must agree before submittion"
              feedbackType="invalid"
            />
          </Form.Group>

           <Form.Group>
            <Link to={"/Passenger/DashBord"}>
            <Button type="submit" className="w-100 mb-4">
              Register
            </Button>
            </Link>
          </Form.Group> */}

        </Form>
        {UserName}
      </Card>
    </div>
                </div>


        </Card.Text>
      </Card.ImgOverlay>
    </Card>


     </div>
  );
        
        }
export default RegisterForm;