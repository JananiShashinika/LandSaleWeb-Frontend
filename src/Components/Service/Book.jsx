import {React,  useState } from 'react'
import Navigation from '../Navigation'
import { Form,FormText,Button, Modal } from 'react-bootstrap'
import { MDBRow ,MDBCol, MDBContainer} from 'mdb-react-ui-kit'
import Footer from '../Footer'
import Booking from './Booking'
// import { Component } from 'react'


function Book() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  const[town,setTown] = useState('')
  const[landName,setLandName] = useState('')
  const[landNo,setLandNo] = useState('')
  const[fullName,setFullName] = useState('')
  const[tel,setTel] = useState('')
  const[extra,setExtra] = useState('')

  const onClick = (e)=>{
    e.preventDefault()
    const booking_land={town,landName,landNo,fullName,tel,extra}
    console.log(booking_land)
    fetch("http://localhost:8080/api/v1/bookLand/addBook",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(booking_land)

    }).then(()=>{
      console.log("New Booking added")
    })
  }


  return (
    <div>
<Navigation/>
<br/>
<Button  variant="outline-success" size="lg" href='/'> Back</Button>

<div style={{ marginTop:"3px" , height:"800", align:"center",padding:"30px"}}>

<h3 style={{color:"darkslateblue" ,textAlign:"center" ,textUnderlinePosition:"under"}}> 
Book Your <span style={{color:'maroon'}}><b>DREAM </b></span><span style={{color:'green'}}>Land</span></h3>
   {/* <br></br> */}
   <p><h4> You can book the land for 02 days from the registered date..</h4> </p>
</div>

<div style={{padding:"20px"}}>
<MDBRow>
    <MDBCol>
    <img  
          src="/img/book.jpg" 
           alt="book"
           className="shadow-1-strong rounded center mt-1 mb-3"
          height={600}
          width={500}
            />
    </MDBCol>
<MDBCol>



<Form style={{ width: "700" , justifyContent:"left" }}>
    <FormText> <h2>Land Booking Form </h2>
    </FormText>
<br></br>
    <Form.Group required  controlId="town" className="mt-3 ">  
        <Form.Label >Town</Form.Label>
          <Form.Control required type="text" placeholder="town" 
          value={town} 
          onChange={(e)=>setTown(e.target.value)}
          /> 
          </Form.Group>
<MDBRow> <MDBCol>
    <Form.Group required  controlId="landname" className="mt-3 ">  
        <Form.Label >Land Name</Form.Label>
          <Form.Control required type="text" placeholder="land Name"  
          value={landName} 
          onChange={(e)=>setLandName(e.target.value)}
          /> 
          </Form.Group>
          </MDBCol> <MDBCol>
          <Form.Group required controlId="slotNos" className="mt-3 ">  
        <Form.Label >Land No/s</Form.Label>
          <Form.Control required type="text" placeholder="land No" 
          value={landNo} 
          onChange={(e)=>setLandNo(e.target.value)}
          /> 
          </Form.Group>
        
          </MDBCol>
        </MDBRow>

        <br></br>
          <Form.Group required= "required" controlId="fullname" className="mt-3 ">  
        <Form.Label >Full Name</Form.Label>
          <Form.Control required type="text" placeholder="Full Name of the Contacting Person" 
          value={fullName} 
          onChange={(e)=>setFullName(e.target.value)}
          /> 
          </Form.Group>

          <Form.Group required controlId="purpose" className="mt-3">  
        <Form.Label >Telephone</Form.Label>
          <Form.Control required type="text" placeholder="telephone" 
          value={tel} 
          onChange={(e)=>setTel(e.target.value)}
          /> 
          </Form.Group>

          <Form.Group required controlId="note" className="mt-3">  
        <Form.Label >Extra Note</Form.Label>
          <Form.Control required type="text" placeholder="note"
          value={extra} 
          onChange={(e)=>setExtra(e.target.value)}
          /> 
          </Form.Group>
<br></br>
</Form>

{/* <div  > */}
<Button  className="left" href="/bookingSuccess" onClick={onClick} >Book Your Land</Button>

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
<Button  href="/contact" onClick={onClick} style={{marginLeft:"20px"}}>Cancel</Button>


</MDBCol>
        </MDBRow>
        </div>

      {/* <Booking/> */}
      <Footer/>
    </div>
  )
}

export default Book;
