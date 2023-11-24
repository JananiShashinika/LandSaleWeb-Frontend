import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Form ,Button} from 'react-bootstrap'
import { Paper } from '@mui/material'
import Navigation from '../../Navigation'
import UpdateBookings from './UpdateBookings'

export default function BookList() {
 
  

  return (
    <div>
        <Navigation/>

        <h2> Booking List</h2>
<div className="Booking" style={{ width:"800", height:"auto"}}>
        
<UpdateBookings/> </div>





      
    </div>
  )
}
