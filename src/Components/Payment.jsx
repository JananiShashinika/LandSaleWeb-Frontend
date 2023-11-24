import React from 'react'
import Navigation from './Navigation';
import Footer from './Footer';
import { Container,Form} from "react-bootstrap";
import { Box } from '@mui/material';


function Payment() {
  return (
    
    <div>
        <Navigation/>
       <br></br>
       <br></br>
       

       <div style={{ marginTop:"5px" , align:"center",padding:"50px"}}>

          <h5> Now you can easily buy a land and update payment details through the website 
            when you select the payment type as installments.. </h5> 
            <h5>We update all the details.</h5>
          <h4> <b> Pay and Own..</b> </h4>

          <Box> 
      
          <Form className="bg-sucsess center"
         width={800}
         height={"auto"}>
        
          <Form.Group controlId="u_name" className="mt-2 ">  
        <Form.Label >User Name</Form.Label>
          <Form.Control required type="text" placeholder="User Name"  /> 
          </Form.Group> 

           <Form.Group controlId="password" className="mt-2 ">  
        <Form.Label >Password</Form.Label>
          <Form.Control required type="text" placeholder="Password"  /> 
          </Form.Group> 

           <Form.Group controlId="land_name" className="mt-2 ">  
        <Form.Label >Land Name</Form.Label>
          <Form.Control required type="text" placeholder="Land Name"  /> 
          </Form.Group> 

           <Form.Group controlId="blocks" className="mt-2 ">  
        <Form.Label >Block Number/s</Form.Label>
          <Form.Control required type="numbers" placeholder="Block Number/s "  /> 
          </Form.Group> 

           <Form.Group controlId="t_price" className="mt-2 ">  
        <Form.Label >Total price</Form.Label>
          <Form.Control required type="text" placeholder="Total price"  /> 
          </Form.Group> 

           <Form.Group controlId="p_price" className="mt-2 ">  
        <Form.Label >Paying amount</Form.Label>
          <Form.Control  required type="text" placeholder="Paying amount"  /> 
          </Form.Group>

          <Form.Group controlId="d_price" className="mt-2 ">  
        <Form.Label >Due amount</Form.Label>
          <Form.Control required type="text" placeholder="Due amount"  /> 
          </Form.Group> 

           
          </Form>


          </Box>


        </div>

      


        <Footer/>
    </div>
  )
}

export default Payment; 
