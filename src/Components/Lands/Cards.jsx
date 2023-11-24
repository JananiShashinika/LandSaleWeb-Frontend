import React from 'react'
import { Card ,Button} from 'react-bootstrap'
// import '.../Components/benefits.css'


export default function Cards() {
  return (
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
                </Card></div>

                <div className ="column" style={{border:"inherit"}}>

                <Card style={{ width: "23rem",height:"26rem" }}>
                <Card.Body>
                <Card.Img src="/img/kurunegala.jpg" />
                
                    <Card.Title>KURUNEGALA</Card.Title>
                    <Card.Text>
                     Prestige Place - Lake Round
                    </Card.Text>
                    <Button variant="success" href="/kurunegala" text-align="bottom-left">view land</Button>
                  </Card.Body>
                </Card></div>

                <div className ="column" style={{border:"inherit"}}>
                <Card style={{ width: "23rem",height:"26rem" }}>
                <Card.Body>
                <Card.Img src="/img/yakkala.jpg" />
                  
                    <Card.Title>YAKKALA</Card.Title>
                    <Card.Text>
                      City Emarald - Yakkala
                    </Card.Text>
                    <Button variant="success" href="/yakkala"  >view land</Button>
                  </Card.Body>
                </Card></div>

                <div className ="column" style={{border:"inherit"}}>

                <Card style={{ width: "23rem",height:"26rem" }}>
                <Card.Body>
                <Card.Img src="/img/hatton.jpg" />
                  
                    <Card.Title>HATTON</Card.Title>
                    <Card.Text>
                     Hatton Tea Lounge - Hatton
                    </Card.Text>
                    <Button variant="success" href="/hatton">view land</Button>
                  </Card.Body>
                </Card></div>

                <div className ="column" style={{border:"inherit"}}>
                <Card style={{ width: "23rem",height:"26rem" }}>
                <Card.Body>
                <Card.Img src="/img/wewaldeniya.jpg" />
                  
                    <Card.Title>WEWALDENIYA</Card.Title>
                    <Card.Text>
                      The Ace - Wewaldeniya
                    </Card.Text>
                    <Button variant="success" href="/wewaldeniya">view land</Button>
                  </Card.Body>
                </Card></div>

                <div className ="column" style={{border:"inherit"}}>
                <Card style={{ width: "23rem",height:"25rem" }}>
                  <Card.Body>
                  <Card.Img src="/img/wewaldeniya.jpg" />
                    <Card.Title>PASYALA</Card.Title>
                    <Card.Text>
                     The Ace  - Pasyala
                    </Card.Text>
                    <Button variant="secondary" href="/pasyala">view land</Button>
                  </Card.Body>
                </Card>

                </div>
                </div>
                </div>
</div>
      

  )
}
