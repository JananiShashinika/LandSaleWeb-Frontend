import React, { useState } from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import Navigation from '../Components/Navigation'
import { Button } from 'react-bootstrap';
import Find from '../Components/Service/Find';
import Header from '../Components/Header';
import { useNavigate } from 'react-router-dom';
import { setRef } from '@mui/material';

function Login() {

  const [username, setUsername]=useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async(e) => {
    e.preventDefault()
    setError(null);
    const admin = {username,password} ;
    console.log("Logging in with:",{username, password})
    
    try{
      const response = await fetch("http://localhost:8080/api/auth/login",{
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(admin),
    
    });
    if(!response.ok){
      const errorData = await response.json();
      setError(errorData.message || 'Login failed. Please check your credentials and try again');
      return;
    }

    const data = await response.json();
    localStorage.setItem('jwtToken',data.token);
      navigate('/Admin');
    } catch(err){
      setError('An unexpected error occurred.');
      console.error('Login error:',err);
  }
    };

  
  return (

    <div> 
      <Header/>
     <Navigation/> 

   <h2 className="my-3" style={{ textAlign:"center" ,color:"burlywood"}}> Admin Login Page</h2>
   
    <MDBContainer fluid className="p-3 my-1">
      <MDBRow>
        <MDBCol>
        <img  
          src="/img/login.jpg" 
           alt="login"
           className="shadow-1-strong rounded right mt-1 mb-3"
          height={350}
          width={300}
            />
        </MDBCol>

        <MDBCol>
          <MDBInput wrapperClass='mb-3' 
          placeholder='User Name' label='User Name'  type='text' 
          size="lg" value={username} onChange={(e) =>setUsername(e.target.value) }/>


          <MDBInput wrapperClass='mb-3' 
          placeholder='Password' label='Password'  type='password' 
          autoComplete="curren-password" size="lg" value={password} onChange={(e) => setPassword(e.target.value)}/>

          {error && <p style={{ color:'red'}}>{error}</p>}

          <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            {/* <a href="!#">Forgot password?</a> */}
          </div>

          <div className='text-center text-md-start mt-4 pt-2'>
            <div className="d-grid gap-1">
            <button variant="outline-dark" style={{ minWidth: '100px', minHeight: '40px' }} 
            size='small' onClick={handleLogin}>Login</button>
</div>
            {/* <p className="small fw-bold mt-2 pt-1 mb-2"><h5>Don't have an account? 
            <a href="/signin" className="link-danger">Sign in</a></h5></p> */}
          </div>
        </MDBCol>

      </MDBRow>
<br/>


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


           
            {/* <Find/> */}
    </div>
  );
}

export default Login;