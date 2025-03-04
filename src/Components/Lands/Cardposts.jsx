import React from 'react'
import { Button, Card } from 'react-bootstrap'

function Cardposts() {
  return (
    <div>
      <div>
      <div className="bg-secondary bg-opacity-25 container-fluid">

      <div className="grid">
      <div className ="column" style={{border:"inherit"}}>
      
                <Card style={{ width: "23rem",height:"26rem" }}  >
                <Card.Body>
                <Card.Img src="/img/kadawatha.jpg" />
                 
                    <Card.Title>KADAWATHA</Card.Title>
                    <Card.Text>
                      Millenium Lands - Kadawatha
                    </Card.Text>
                    <Button variant="success"  href="/kadawatha">view land</Button>
                  </Card.Body>
                </Card>
                </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Cardposts
