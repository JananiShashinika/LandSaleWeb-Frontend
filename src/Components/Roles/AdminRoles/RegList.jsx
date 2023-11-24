import {React , useEffect,useState  } from 'react'
import Navigation from '../../Navigation'

import { Form ,Button} from 'react-bootstrap'
import { Paper } from '@mui/material'
// import UpdateUsers from './UpdateUsers'
import UpdateBookings from './UpdateBookings'
import UpdateUserData from './UpdateUserData'
export default function RegList() {



  return (
    
    <div>
      <Navigation/>
<h2> Registered Users</h2>

<div className="updateUserData" style={{width:"800",height:"auto"}}>
<UpdateUserData/>
</div>



</div>





    
  )
}
