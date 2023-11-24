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

        <h2> Booking List</h2>
<div className="appointments" style={{ width:"800", height:"auto"}}>
        
<UpdateApps/> </div>





      
    </div>
  )
}
