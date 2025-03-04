import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Form ,Button} from 'react-bootstrap'
import { Paper } from '@mui/material'
import Navigation from '../../Navigation'

import UpdateApps from './UpdateApps'

export default function AppList() {
 
  

  return (
    <div>
        <Navigation/>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "5vh",margin:"15px" }}>
              <Button  variant="success" size="lg" href="/Admin">Back to Admin Dashboard</Button>
            </div>
            
      <div className="appointments" style={{ width:"800", height:"auto"}}>
              
<UpdateApps/> </div>





      
    </div>
  )
}
