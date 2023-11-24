import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './facilities.css'
import MoreLands from './MoreLands'


const faci_two = new URL ("../img/faci_two.jpg" , import.meta.url)

 function Facilities() {
  return (
    <div calssName="facility">


      <Card>
        <Card.Img  variant="middle" src={faci_two}   />
        <Card.ImgOverlay>
        <Card.Body>
          <Card.Text>
            {/* Facilities */}
            
          <MoreLands/>

      </Card.Text>
        </Card.Body>
        </Card.ImgOverlay>
      </Card>
     
  

      </div>
  )
}
export default Facilities;




    
