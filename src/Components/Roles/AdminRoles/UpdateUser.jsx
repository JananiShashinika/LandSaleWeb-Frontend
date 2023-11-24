import React from 'react'

export default function UpdateUser() {
  return (
    <div>
      
      <div className="pt-4" style={{ height: "900px", marginTop:"5px"}} >
      <Card className="align-items-md-center mt-3" style={{ width: "700px" ,height:"0px" , right:"10px",
      left:"5px",margin:"auto"}}>
        
        <Form >
          <FormText>
            <h3 style={{color: "white",align:"center" }}> Dream Lands - Registration Form</h3>
          </FormText>

          <Form.Group required= "required" controlId="u_id" className="mt-2 ">  
        <Form.Label >User ID</Form.Label>
          <Form.Control required type="text" placeholder="User ID Required" 
          value={UserID} 
          onChange={(e)=>setUserID(e.target.value)}
          /> 
          </Form.Group>   
          
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

    
        <Form.Group required= "required" controlId="u_name" className="mt-2 ">  
        <Form.Label >User Name</Form.Label>
          <Form.Control required type="text" placeholder="User Name" 
          value={UserName} 
          onChange={(e)=>setUserName(e.target.value)}
          /> 
          </Form.Group>        
       
        <Form.Group required= "required" controlId="full_name" className="mt-2">     
        <Form.Label >Full Name</Form.Label>
          <Form.Control required type="text" placeholder="Full Name"
          value={fullName} 
          onChange={(e)=>setFullName(e.target.value)}
          />
          </Form.Group>
    

          
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
        </Card.Text>
          </>



        </Form>
    
      </Card>
    </div>
    </div>
  )
}
