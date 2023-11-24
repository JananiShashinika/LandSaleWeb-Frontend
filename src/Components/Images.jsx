import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './images.css'

function Images() {

  return (
    <div className="mt-5">
    <Carousel>

    <Carousel.Item>

<img
  className="d-inline-block  w-100"
  src="/img/search.jpg"
  alt="Second slide"
  height={450}/>
   <Carousel.Caption>
  <h2> Welcome !</h2>
  <p><h3>Invest for the future.. </h3></p>
</Carousel.Caption>
</Carousel.Item>

      <Carousel.Item>

        <img
          className="d-inline-block  w-100"
          src="/img/green.jpg"
          alt="First slide"
          height={450}
        />
        <Carousel.Caption>
          {/* <Container className='logo' >
          <img src="/img/logo.png"  alt="Logo image" />
          </Container> */}
               <h2> Welcome !</h2>
          <p><h3> Don't wait to Buy Land, Buy Land & Wait..</h3> </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>

        <img
          className="d-inline-block  w-100"
          src="/img/homeimg3.jpg"
          alt="Second slide"
          height={450}/>
           <Carousel.Caption>
          <h2> Welcome !</h2>
          <p><h3>Invest for the future.. </h3></p>
        </Carousel.Caption>
      </Carousel.Item>
     
      <Carousel.Item>
         <img
          className="d-inline-block  w-100"
          src="/img/sell.jpg"
          alt="Third slide"
          height={450}
        /> <Carousel.Caption>
          <h2> Welcome !</h2>
          <p><h3>The Best investment on earth is earth.. </h3><br/>
          {/* <a href="/learnMore" className='btn btn-warning mt-3'> Learn More</a>  */}
          </p>
          
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
         <img
          className="d-inline-block  w-100"
          src="/img/homeimg1.jpg"
          alt="Third slide"
          height={450}
        /> <Carousel.Caption>
          <h2> Welcome !</h2>
          <p><h3>Join with us for more.. </h3></p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    
    </div>
  );
}

export default Images;