import React from 'react'
import SearchLands from '../Components/SearchLands';
import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer';
import { Card,Carousel, Stack } from 'react-bootstrap';
import { Button } from '@mui/material';
import { MDBCol, MDBRow } from 'mdb-react-ui-kit';
// import '../Components/content.css'
import LandCarousel from '../Components/LandCarousel';
import Cards from '../Components/Lands/Cards';

export default function Search() {

  return (
    <div>
      <Navigation/>
      <SearchLands/>
      <LandCarousel/>
      <br></br>
      <Cards/>

      {/* <div>
      <div className="bg-dark bg-opacity-25 ">
        
        
              
             
                <MDBCol>
                <MDBRow>
                <Card style={{ width: "25rem",height:"27rem" }}  >
                <Card.Body>
                <Card.Img src="/img/kadawatha.jpg" />
                 
                    <Card.Title>KADAWATHA</Card.Title>
                    <Card.Text>
                      Millenium Lands - Kadawatha
                    </Card.Text>
                    <Button variant="success"  href="/kadawatha">view land</Button>
                  </Card.Body>
                </Card>

                <Card style={{width: "25rem",height:"27rem" }}  >
                <Card.Body>
                <Card.Img src="/img/kurunegala.jpg" />
                
                    <Card.Title>KURUNEGALA</Card.Title>
                    <Card.Text>
                     Prestige Place - Lake Round
                    </Card.Text>
                    <Button variant="success" href="/kurunegala" text-align="bottom-left">view land</Button>
                  </Card.Body>
                </Card>


                <Card style={{width: "25rem",height:"27rem" }}  >
                <Card.Body>
                <Card.Img src="/img/yakkala.jpg" />
                  
                    <Card.Title>YAKKALA</Card.Title>
                    <Card.Text>
                      City Emarald - Yakkala
                    </Card.Text>
                    <Button variant="success" href="/yakkala"  >view land</Button>
                  </Card.Body>
                </Card>

                </MDBRow>
              <MDBRow>

                <Card style={{width: "25rem",height:"27rem" }}  >
                <Card.Body>
                <Card.Img src="/img/hatton.jpg" />
                  
                    <Card.Title>HATTON</Card.Title>
                    <Card.Text>
                     Hatton Tea Lounge - Hatton
                    </Card.Text>
                    <Button variant="success" href="/hatton">view land</Button>
                  </Card.Body>
                </Card>

                <Card style={{ width: "25rem",height:"27rem" }}  >
                <Card.Body>
                <Card.Img src="/img/wewaldeniya.jpg" />
                  
                    <Card.Title>WEWALDENIYA</Card.Title>
                    <Card.Text>
                      The Ace - Wewaldeniya
                    </Card.Text>
                    <Button variant="success" href="/wewaldeniya">view land</Button>
                  </Card.Body>
                </Card>

                <Card style={{ width: "25rem",height:"27rem" }}  >
                  <Card.Body>
                  <Card.Img src="/img/yakkala.jpg" />
                    <Card.Title>PASYALA</Card.Title>
                    <Card.Text>
                     The Ace  - Pasyala
                    </Card.Text>
                    <Button variant="secondary" href="/pasyala">view land</Button>
                  </Card.Body>
                </Card>
                </MDBRow>
</MDBCol>

             
            </div>
          


      </div> */}







      <Footer/>


      
    </div>
  )
};
