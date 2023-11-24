import React from "react";
import { Carousel, Card, Stack, Button } from "react-bootstrap";

export default function LandCarousel() {
  const reviews =  [
    { _id: 1, text: "abc" },
    { _id: 2, text: "def" },
    { _id: 3, text: "ghi" },
    { _id: 4, text: "jkl" },
    { _id: 5, text: "mno" },
    { _id: 6, text: "pqr" },
    { _id: 7, text: "stu" },
    { _id: 8, text: "vwx" },
    { _id: 9, text: "yza" }
  ];

  return (
    <div className="border-inherit"  style={{background:"lightgrey"}}>
      <h3 className= " text-center text-dark  my-4 " > ----- Discover the Best One -----</h3>
       <h2 className = "text-center ff-serif my-4 "  style={{color:"coral"}}> Featured Properties in Our Latest Projects </h2>
      {/* <h2 className="text-center fw-bold ff-cursive bg-red my-5 ">
        Our Latest Projects
        /// ({reviews.length})
      </h2> */}

      <div className="bg-dark bg-opacity-25 container-fluid">
        <Carousel style={{ height: 500 }}>
          {reviews.map((review, index) => (
            <Carousel.Item style={{ height: 500 }}>
              <Stack
                direction="horizontal"
                
                className="h-100 justify-content-center align-items-center"
                gap={1}
              >
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

                <Card style={{ width: "23rem",height:"26rem" }}>
                <Card.Body>
                <Card.Img src="/img/kurunegala.jpg" />
                
                    <Card.Title>KURUNEGALA</Card.Title>
                    <Card.Text>
                     Prestige Place - Lake Round
                    </Card.Text>
                    <Button variant="success" href="/kurunegala" text-align="bottom-left">view land</Button>
                  </Card.Body>
                </Card>

                <Card style={{ width: "23rem",height:"26rem" }}>
                <Card.Body>
                <Card.Img src="/img/yakkala.jpg" />
                  
                    <Card.Title>YAKKALA</Card.Title>
                    <Card.Text>
                      City Emarald - Yakkala
                    </Card.Text>
                    <Button variant="success" href="/yakkala"  >view land</Button>
                  </Card.Body>
                </Card>

                <Card style={{ width: "23rem",height:"26rem" }}>
                <Card.Body>
                <Card.Img src="/img/hatton.jpg" />
                  
                    <Card.Title>HATTON</Card.Title>
                    <Card.Text>
                     Hatton Tea Lounge - Hatton
                    </Card.Text>
                    <Button variant="success" href="/hatton">view land</Button>
                  </Card.Body>
                </Card>

                <Card style={{ width: "23rem",height:"26rem" }}>
                <Card.Body>
                <Card.Img src="/img/wewaldeniya.jpg" />
                  
                    <Card.Title>WEWALDENIYA</Card.Title>
                    <Card.Text>
                      The Ace - Wewaldeniya
                    </Card.Text>
                    <Button variant="success" href="/wewaldeniya">view land</Button>
                  </Card.Body>
                </Card>

                {/* <Card style={{ width: "23rem",height:"25rem" }}>
                  <Card.Body>
                    <Card.Title>PASYALA</Card.Title>
                    <Card.Text>
                     The Ace  - Pasyala
                    </Card.Text>
                    <Button variant="secondary" href="/pasyala">view land</Button>
                  </Card.Body>
                </Card> */}

              </Stack>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
