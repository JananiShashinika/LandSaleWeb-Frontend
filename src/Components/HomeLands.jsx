import React from 'react'
import './homeLands.css'
// import { Carousel } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';



const one = new URL ("../img/one.jpg" , import.meta.url)
const two = new URL ("../img/two.jpg" , import.meta.url)
const three = new URL ("../img/three.jpg" , import.meta.url)


function HomeLands() {
  return (

    <div>
      <h4 className= "discover " > ----- Discover the Best One -----</h4>
       <h3 className = "property" > Featured Properties </h3>

      

    <CardGroup>
      <Card>
        <Card.Img variant="top" src={one} />
        <Card.Body>
          <Card.Title><h3>Kadawatha</h3></Card.Title>
          <Card.Text>
               This is the Best selling property in 2023, 
            this is speacial beacuse of the highway entrance of Kadawatha.
             There are only 2 km for the highway experience.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"> <h4>- For Sale -</h4></small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={two} />
        <Card.Body>
          <Card.Title><h3>Kurunegala</h3></Card.Title>
          <Card.Text>
             This property is located in infront of the Kurunegala 'wewa rauma'. 
             This is the second rating in 2023.
           .{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"><h4 className=" text-align center">- For Sale -  </h4></small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={three} />
        <Card.Body>
          <Card.Title><h3>Wewaldeniya</h3></Card.Title>
          <Card.Text>
              
              This is our third rating in these days.Land is located from 1km from Colombo-Kandy road
               and it is a village area nearest to the town.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"><h4>- For Sale - </h4></small>
        </Card.Footer>
      </Card>
    </CardGroup>

    </div>
  );
}



export default HomeLands;