import React from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import Carousel from 'react-bootstrap/Carousel';
import Navigation from '../Components/Navigation'

import { Button } from 'react-bootstrap';
import Find from '../Components/Service/Find';

function Login() {

  return (

    <div> 
     <Navigation/> 
     

    <MDBContainer fluid className="p-5 my-2 h-custom">
      <MDBRow>
        <MDBCol>
        <img  
          src="/img/login.jpg" 
           alt="login"
           className="shadow-1-strong rounded center mt-2 mb-3"
          height={600}
          width={500}
            />
          {/* <img src="/img/login.jpg" class="img-fluid h- w-50" alt="login image" /> */}
          

        </MDBCol>
        <MDBCol>

          <div className="divider d-flex align-items-left my-4">
            <p className="font-color green fw-bold mx-3 mb-0 "> <h2> Log In...</h2> </p>
          </div>

          <MDBInput wrapperClass='mb-4' placeholder='User Name' label='User Name'  type='numbers' size="lg"/>
          <MDBInput wrapperClass='mb-4' placeholder='Password' label='Password'  type='password' size="lg"/>

          <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <div className='text-center text-md-start mt-4 pt-2'>
            <div className="d-grid gap-1">
            <Button variant="outline-dark" className="mb-0 px-1 mw-4 mh-2 "size='small'>Login</Button>
</div>
            <p className="small fw-bold mt-2 pt-1 mb-2"><h5>Don't have an account? 
            <a href="/signin" className="link-danger">Sign in</a></h5></p>
          </div>
        </MDBCol>

      </MDBRow>
<br/>

<Button href="/Customer" >Customer</Button>
<Button href="/Agent" >Agent</Button>
<Button href="/Admin" >Admin</Button> 

<br></br>
     <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between
       py-4 px-2 px-xl-3 bg-dark">
          <div className="text-white mb-3 mb-md-0">
          Copyright © 2023. All rights reserved.
        </div>

        <div>

        <Button tag='a' color='none' className='mx-3' href="/signup" style={{ color: 'white' }}>
            <MDBIcon fab icon='facebook-f' size="md"/>
          </Button> 

          <Button tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <MDBIcon fab icon='twitter' size="md"/>
          </Button> 

          <Button tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <MDBIcon fab icon='google' size="md"/>
          </Button> 

          <Button tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <MDBIcon fab icon='linkedin-in' size="md"/>
          </Button> 

        </div>

      </div>

    </MDBContainer>


           {/* <div className="d-flex flex-row align-items-center justify-content-center"> */}
            {/*<p className="lead fw-normal mb-0 me-3">Loging as</p>
            <MDBBtn floating size='md' tag='a' className='me-2'>
                <button> Admin </button>
                  {/* <MDBIcon fab icon='facebook-f' /> */}
            {/* </MDBBtn>
            <MDBBtn floating size='md' tag='a'  className='me-2'>
                <button> Customer </button>
              {/* <MDBIcon fab icon='twitter' /> */}
            {/* </MDBBtn>
                    <MDBBtn floating size='md' tag='a'  className='me-2'>
                <button> Agent </button>               
              {/* <MDBIcon fab icon='twitter' /> */}
            {/* </MDBBtn> </div>*/}

            <Find/>
    </div>
  );
}

export default Login;