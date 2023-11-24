import { Paper } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { Button, Form,FormText } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { Card } from 'react-bootstrap';
import { Opacity } from '@mui/icons-material';

function Appointment() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const paperStyle={padding:"10px 10px",width:"400px",height:"380px",margin:"15px auto",background:"lightblue" , border:"rounded"}

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(' http://localhost:8080/api/v1/addAppointment', {
      method: 'POST',
      body: JSON.stringify({ name, phone, message }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  return (
    // <Paper elevation={2} style={paperStyle}>

    <Card className="bg-inherit text-black">
      <Card.Img src= "/img/call1.jpg" 
      height={600}
      width={1000} 
      alt="app" />
      <Card.ImgOverlay>
        <Card.Title className="text-center"> REQUEST APPOINTMENTS...</Card.Title>
        <Card.Text>

    <Form style={{alignContent:"center", width: "430px" , height:"350px", backgroundOpacity:"0.7", justifyContent:"left",padding:"10px" }} onSubmit={handleSubmit}>
        <FormText> <h4 className='text-center' style={{color:"darkblue"}}> Enter Your Details here,</h4>
    </FormText>


<Form.Group required  controlId="name" className="mt-3 ">  
        <Form.Label >Name:</Form.Label>
          <Form.Control required type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
       </Form.Group>
     
          <Form.Group required  controlId="phone" className="mt-3 ">  
        <Form.Label >Telephone No:</Form.Label>
          <Form.Control required type="text" placeholder="telephone no" value={phone} onChange={(e) => setPhone(e.target.value)}/>
       </Form.Group>
    
       <Form.Group required  controlId="message" className="mt-3 ">  
        <Form.Label >Message:</Form.Label>
          <Form.Control required type="text" placeholder="message"  value={message} onChange={(e) => setMessage(e.target.value)} />
       </Form.Group>
<br></br>
       <Button variant='dark'className='center' type="submit" onClick={handleSubmit}>Submit</Button>
       <Button className='ml-5' variant='danger' href="/"  type="cancel">Cancel</Button>
       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Thank You ! </Modal.Title>
        </Modal.Header>
        <Modal.Body> Our agent will contact you soon.. </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>

    </Form>
    </Card.Text>
    </Card.ImgOverlay>
    </Card>



// </Paper>


  
  );
}
export default Appointment;



// render(<Example />);