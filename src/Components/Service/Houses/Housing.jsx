import React from 'react'
import Navigation from '../../Navigation'
import { Carousel } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';



export default function Housing() {
  return (
    <div className="bg-white">
      <Navigation/>

      <div className="Details ">
    <Carousel className="carousel">
      <Carousel.Item>

        <img
          className="d-inline-block  w-100"
          src="/img/housing/house11.jpg"
          alt="First slide"
          height={400}
        />
        <Carousel.Caption>
          {/* <Container className='logo' >
          <img src="/img/logo.png"  alt="Logo image" />
          </Container> */}
               <h2> DREAM land Houses & Construction</h2>
          <h3> Join with us for building  your DREAM House..</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>

        <img
          className="d-inline-block  w-100"
          src="/img/housing/house21.jpg"
          alt="First slide"
          height={400}/>
           <Carousel.Caption>
           <h2> DREAM land Houses & Construction</h2>
          <p><h3>Invest for the future.. </h3></p>
        </Carousel.Caption>
      </Carousel.Item>
     
      <Carousel.Item>
         <img
          className="d-inline-block  w-100"
          src="/img/housing/house31.jpg"
          alt="First slide"
          height={400}
        /> <Carousel.Caption>
           <h2> DREAM land Houses & Construction</h2>
          <h3>The Best investment on earth is earth.. </h3>
          {/* <a href="/learnMore" className='btn btn-warning mt-3'> Learn More</a>  */}
          
          
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
         <img
          className="d-inline-block  w-100"
          src="/img/housing/house41.jpg"
          alt="First slide"
          height={400}
        /> <Carousel.Caption>
           <h2> DREAM land Houses & Construction</h2>
          <h3>Join with us for more.. </h3>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
      </div>
<br></br>
      <div className="description center" id="data">
        <p> <h5> We are DREAM Lands Housing & Construction Section.. We established in 2021. In this short
           time period we have got a better place in the housing & construction field. Here we are presenting 
           our latest, modern housing plans and structures and 3D images. You are warmly <span style={{color:"honeydew"}}> WELCOME </span>for connectiong 
           us for more experiences.. </h5>
           <br/>
           <h6>We have several options that are customer base satisfaction..
            </h6></p>
 </div>

 < div >
  <h4> DREAM Land -  Constructed Houses Collection, most of them are built for our land customers
      </h4>
  <h3> Our Latest Projects</h3>





    <Row md={0}>
    {/* xs={1} md={2} className="g-4" */}
        <Col>
          <Card>
            <Card.Img variant="top" src="/img/housing/house11.jpg"
            height={350}
            width={350 }
             />
            <Card.Body>
              <Card.Title><h4>Four bed rooms with three bathrooms</h4></Card.Title>
              <Card.Text>
                <h5> In Kadawatha - Premium Lands ( Sold Out project)</h5>
                <Link to="/house1"><h5>view more</h5></Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card>
            <Card.Img variant="top" src="/img/housing/house21.jpg"
            height={350}
            width={350 } />
            <Card.Body>
              <Card.Title>Three bed rooms with two bathrooms</Card.Title>
              <Card.Text>
              <h5> In Yakkala - City Emarald( On going project)</h5>
                <Link to="/house2"><h5>view more</h5></Link>
              </Card.Text>
            </Card.Body>
          </Card>
        
        </Col>

      
    </Row>
    <Row >
    {/* xs={1} md={2} className="g-4" */}
        <Col>
          <Card>
            <Card.Img variant="top" src="/img/housing/house11.jpg" 
            height={"350"}
            width={"350 "}/>
            <Card.Body>
              <Card.Title>Three bed rooms with three bathrooms</Card.Title>
              <Card.Text>
              <h5> In Kadawatha - Millenium Lands ( On going project)</h5>
                <Link to="/house3"><h5>view more</h5></Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card>
            <Card.Img variant="top" src="/img/housing/house21.jpg"
             height={"350"}
             width={"350 "} />
            <Card.Body>
              <Card.Title>Three bed rooms with two bathrooms</Card.Title>
              <Card.Text>
              <h5> Danowita</h5>
                <Link to="/house4"><h5>view more</h5></Link>
              </Card.Text>
            </Card.Body>
          </Card>
        
        </Col>

      
    </Row>
    <Row >
    {/* xs={1} md={2} className="g-4" */}
        <Col>
          <Card>
            <Card.Img variant="top" src="/img/housing/house51.jpg" 
            height={"350"}
            width={"350 "}/>
            <Card.Body>
              <Card.Title>Two bed rooms with one bathroom</Card.Title>
              <Card.Text>
              <h5> Kottawa </h5>
                <Link to="/house5"><h5>view more</h5></Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
        <Card>
            <Card.Img variant="top" src="/img/housing/house61.jpg"
             height={"350"}
             width={"350 "} />
            <Card.Body>
              <Card.Title>Three bed rooms with one bathroom</Card.Title>
              <Card.Text>
              <h5> In Yakkala - City Emarald ( On going project)</h5>
                <Link to="/house6"><h5>view more</h5></Link>
              </Card.Text>
            </Card.Body>
          </Card>
        
        </Col>      
    </Row>
    




















  
{/* <div className="container">
  <div className="row">
    <div className="col">
 
    <Card className="bg-dark text-white center"  alt="h1">
      <Card.Img src="/img/housing/house11.jpg" 
      style={{width:"500" ,height:"500"}}/>
      <Card.ImgOverlay>
        <Card.Title>Title</Card.Title>
        <Card.Text>
        <h3> Kadawatha - Premium Lands (Sold Out) </h3><br/>
         <h4>This house is built with three bed rooms with three bath rooms </h4>
        </Card.Text>
        <Card.Text>
          <Link to="/data">View For more...</Link>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  </div>

  <div className="h2">
  <Card className="bg-dark text-white">
      <Card.Img src="/img/housing/house21.jpg" alt="h2" />
      <Card.ImgOverlay>
        <Card.Title>Title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>
          <Link to="house2">View For more...</Link>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
     </div>

     </div><div className="col">

     <div className="h3">
  <Card className="bg-dark text-white">
      <Card.Img src="/img/housing/house31.jpg" alt="h3" />
      <Card.ImgOverlay>
        <Card.Title>Title</Card.Title>
        <Card.Text>
        <h3> Kadawatha - Premium Lands (Sold Out) </h3><br/>
         <h4>This house is built with three bed rooms with three bath rooms </h4>
        </Card.Text>
        <Card.Text>
          <Link to="house3">View For more...</Link>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
     </div>

     <div className="h4">
  <Card className="bg-dark text-white">
      <Card.Img src="/img/housing/house41.jpg" alt="h4" />
      <Card.ImgOverlay>
        <Card.Title>Title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>
          <Link to="house4">View For more...</Link>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
     </div>
     </div>
 */}

</div>
 </div>

  )
}