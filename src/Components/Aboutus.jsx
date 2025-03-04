import React from 'react'

import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';

import '../Components/aboutus.css'

const sell = new URL ("../img/sell.jpg" , import.meta.url)


export default function Aboutus() {
  return (
    <Card className="bg-dark text-black h-10 " >
      <Card.Img src={sell} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title><h1 style={{ textAlign:"center", color:"lightgoldenrodyellow"}}>About Us </h1></Card.Title>
        
        <Card.Text>
        <h3 className="center" style={{color:"yellow",fontFamily:"cursive"}}>The Best place to invest...</h3>
        </Card.Text>
        
        <div>
        <div style={{color: "white", fontSize:"20px" , width:"95%",height:"600px",textAlign:"center",fontFamily:"cursive" }}> We have been in business for past 32 years and we are specialized in providing
           quick and genuine real estate services. We are dedicated to create a better place on 
           earth as per our clients' desires and requirements. We value their perceptions while 
           relying on our values.
           <div style={{ textAlign:"-moz-initial"}}>
           <li>Professionalism</li>
           <li>High Quality Property</li>
           <li>Best Corporate Practices</li>
           <li>Integrity & Trust</li>
           <li>Innovative</li>
           <li>Positivism</li>
           </div>
          <br/>
          <p>We have established a unique position among our customer minds as we use the latest technology
             & highest quality material for our construction work. As an esteemed player in the construction 
             industry, we are pioneers in providing solutions in order to exceed our customer expectations.
              our employees are gifted with intense set of skills & creativity which helps us to complete our
               constructions within the stipulated timelines with the highest possible quality. our brand esteem 
               itself is your mirror of trust which keeps us alive in the construction industry in the island. 
               our core values • Timely Delivery • Driven By Customer Value • Obsession For Best Quality
                • Passion For Creativity • Esteemed By Trust • Mirror Of Uniqueness</p>

           <Card.Text ><h4>{"\n"} Why invest your hard earned money on something that isn't worth your money and time?</h4></Card.Text>
          
          <br>
        </br> <Card.Text><h4>--- Dream Lands ---</h4></Card.Text>
           
 </div>

 </div>
      </Card.ImgOverlay>
    </Card>


          


    



  )
}





