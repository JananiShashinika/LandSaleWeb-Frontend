import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import React from 'react';
import Card from 'react-bootstrap/Card';
import { Grid } from '@mui/material';

function PaymentPlans() {
  return (
    <>
    <div className="p-5  ml-5 text-center">
      <Grid container spacing={2}>
      <Grid item xs={4}>
        <Card
          border="primary"
          
          text={"primary".toLowerCase() === 'light' ? 'dark' : 'dark'}
          style={{ width: "20rem" ,height:"25rem"}}
          className="mb-2"
        >
          <Card.Header className='bg-primary'><h4>Platinum Package</h4></Card.Header>
          <Card.Body>
            <Card.Title variant="primary" ><h5>5% Discount for full payment</h5></Card.Title>
            <br></br>
            <Card.Text>
            5% Discount from the full payment when you pay within three days<br/>No Hidden Charges applied
            </Card.Text>
            <img
          className="block"
          src="/img/platinum.png"
          alt="Block"
          height={150}
          width={200}
          />         
          </Card.Body>
        </Card> 
            </Grid> <Grid item xs={4}>

        <Card
          border="warning"
          
          text={"warning".toLowerCase() === 'light' ? 'dark' : 'dark'}
          style={{ width: "20rem" ,height:"25rem"}}
          className="mb-2"
        >
          <Card.Header className='bg-warning'><h4>Gold Package</h4></Card.Header>
          <Card.Body>
            <Card.Title variant="warning" ><h5>Pay as installments-Plan 1</h5> </Card.Title>
            
            <Card.Text>
             First payment 40% of total<br/>
             +<br/>
             remaining within one month<br/>
             +<br/>
             interest free
             
            </Card.Text>
            <img
          className="block"
          src="/img/gold.png"
          alt="Block"
          height={150}
          width={210}
          />         
          </Card.Body>
        </Card>
        </Grid> <Grid item xs={4}>
        

       
        <Card
          border="success"
          
          text={"success".toLowerCase() === 'light' ? 'dark' : 'dark'}
          style={{ width: "20rem" ,height:"25rem"}}
          className="mb-2"
        >
          <Card.Header className='bg-success'><h4> Silver Package</h4></Card.Header>
          <Card.Body>
            <Card.Title variant="succes"><h5>Pay as installments-Plan 2</h5>  </Card.Title>
      
            <Card.Text>
             First payment is 30% of total<br/>
             +<br/>
             remaining within upto 4 years
             +<br/>
             interest

            </Card.Text>
            <img
          className="block"
          src="/img/silver.png"
          alt="Block"
          height={150}
          width={200}
          />         
          </Card.Body>
        </Card>

       </Grid>
       </Grid>
       </div>
    </>
  );
}

export default PaymentPlans;