import React from 'react'
import Navigation from '../Navigation'
import { Form,FormText,Button } from 'react-bootstrap'
import { MDBRow ,MDBCol, MDBContainer} from 'mdb-react-ui-kit'
import Footer from '../Footer'
import Header from '../Header'


function Reserve() {
  return (
    <div>
      <Header/>
      <Navigation/>
      <br/>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "5vh" }}>
        <Button  variant="success" size="lg" href="/Customer">Back to Customer Dashboard</Button>
      </div>
    <div style={{ marginTop:"5px" , align:"center",padding:"30px"}}>

    <h3 style={{color:"darkslateblue" ,textAlign:"center" ,textUnderlinePosition:"under"}}> 
    Reserve Your <span style={{color:'maroon'}}><b>Dream </b></span><span style={{color:'green'}}>Land</span></h3>
      <br></br>
      <p><h5> Here, you can reserve the land that you are expecting to buy. You can reserve it for you
        upto 10 days from payning date ,by paying the land reserving fee of Rs.50,000/=. This is a refundable payment 
        that if you will not buy the lanssssd,money will be returned with 20% amount off. It will cost as the
        reserving payment. 
        <br></br>
        Bank details are shown below. You can pay for bellow details & attach the payment receipt or transcript 
        scanner copy and fill the form given below.All the money tractions are completely transparent..<br></br>
        Our Agent will contact you soon.. </h5> </p>
    </div>

<div style={{padding:"20px"}}>
<MDBRow>
<MDBCol>
<Form style={{ width: "700" , marginTop:"5px" , align:"left"}}>
    <FormText> <h2>Land Reserving Form </h2>
    </FormText>
<br></br>
    <Form.Group required= "required" controlId="town" className="mt-3 ">  
        <Form.Label >Town</Form.Label>
          <Form.Control required type="text" placeholder="town" 
        //   value={Town} 
        //   onChange={(e)=>setTown(e.target.value)}
          /> 
          </Form.Group>
<MDBRow> <MDBCol>
    <Form.Group required= "required" controlId="landname" className="mt-2 ">  
        <Form.Label >Land Name</Form.Label>
          <Form.Control required type="text" placeholder="land Name" 
        //   value={Land} 
        //   onChange={(e)=>setFullName(e.target.value)}
          /> 
          </Form.Group>
          </MDBCol> <MDBCol>
          <Form.Group required= "required" controlId="slotNos" className="mt-2 ">  
        <Form.Label >Land No/s</Form.Label>
          <Form.Control required type="text" placeholder="land No" 
        //   value={FullName} 
        //   onChange={(e)=>setFullName(e.target.value)}
          /> 
          </Form.Group>
          </MDBCol>
        </MDBRow>

        <br></br>
          <Form.Group required= "required" controlId="fullname" className="mt-1 ">  
        <Form.Label >Full Name</Form.Label>
          <Form.Control required type="text" placeholder="full Name of the Contacting Person" 
        //   value={FullName} 
        //   onChange={(e)=>setFullName(e.target.value)}
          /> 
          </Form.Group>
          <Form.Group required= "required" controlId="NIC" className="mt-3 ">  
        <Form.Label >NIC</Form.Label>
          <Form.Control required type="text" placeholder="national identity card No/any identification No" 
        //   value={FullName} 
        //   onChange={(e)=>setFullName(e.target.value)}
          /> 
          </Form.Group>
          
          <Form.Group required= "required" controlId="purpose" className="mt-3">  
        <Form.Label >Telephone</Form.Label>
          <Form.Control required type="text" placeholder="telephone" 
        //   value={FullName} 
        //   onChange={(e)=>setFullName(e.target.value)}
          /> 
          </Form.Group>
          <Form.Group required= "required" controlId="addrress" className="mt-3 ">  
        <Form.Label >Address</Form.Label>
          <Form.Control required type="text" placeholder="current address" 
        //   value={FullName} 
        //   onChange={(e)=>setFullName(e.target.value)}
          /> 
         </Form.Group>

         <Form.Group controlId="formFile" className="mt-3">
        <Form.Label>Upload the payment receipt</Form.Label>
        <Form.Control type="file" placeholder="upload payment receipt" />
      </Form.Group>

          <Form.Group required= "required" controlId="note" className="mt-3">  
        <Form.Label >Extra Note</Form.Label>
          <Form.Control required type="text" placeholder="note" 
        //   value={FullName} 
        //   onChange={(e)=>setFullName(e.target.value)}
          /> 
          </Form.Group>
<br></br>
</Form>
<Button variant='secondary' className='center' href='/reserveSuccess'>Reserve Your Land</Button>

</MDBCol><MDBCol>
    <img  
          src="/img/reserve.jpg" 
           alt="reserve"
           className="shadow-1-strong rounded center mt-2 mb-3"
          height={600}
          width={500}
            />
    </MDBCol>
        </MDBRow>
        </div>

      
      <Footer/>
    </div>
  )
}

export default Reserve;
