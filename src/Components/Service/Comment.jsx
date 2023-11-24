import React from 'react'
import { Form ,FormText} from 'react-bootstrap'


export default function Comment() {



  return (
    <div>
         <Form style={{alignContent:"center", width: "430px" , height:"350px",borderStyle:"solid", backgroundOpacity:"1", justifyContent:"left" }} 
        //  onSubmit={handleSubmit}
         >
        <FormText> <h4 className='text-center' style={{color:"darkred"}}> Give Your Feedbacks</h4>
    </FormText>
    
    <Form.Group required  controlId="userName" className="mt-3 "> 
       <Form.Label >User Name:</Form.Label>
          <Form.Control required type="text" placeholder="UserName" 
        //   value={name} onChange={(e) => setName(e.target.value)}
           />
       </Form.Group>
       <br></br>
       
       <Form.Group required  controlId="name" className="mt-3 ">  
        <Form.Label >Name:</Form.Label>
          <Form.Control required type="text" placeholder="name" 
        //   value={name} onChange={(e) => setName(e.target.value)}
           />
       </Form.Group>
       <br></br>
     
          <Form.Group required  controlId="comment" className="mt-3 ">  
        <Form.Label >Comment:</Form.Label>
          <Form.Control required type="text" placeholder="your comments" 
        //   value={phone} onChange={(e) => setPhone(e.target.value)}
          />
       </Form.Group> 
       </Form>
      
    </div>
  )
}
