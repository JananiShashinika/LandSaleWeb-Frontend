import React from 'react'
import { Card,Carousel, Container, Form } from 'react-bootstrap';
import Navigation from './Navigation';
import { useState } from "react"
import MoreLands from './MoreLands';
// import Land from './Land';
import SortLands from './SortLands';


const search = new URL ("../img/search.jpg" , import.meta.url)

export default function SearchLands() {

  //Search -filter
const [query, setquery] = useState('')
const handleChange = (e) => {
setquery(e.target.value) }

const [state, setstate] = useState({ query: '', list: [] })

  return (
    <div>
     

    <div  className='search'>

      <br></br>
      <h2> Let's find the Best place for u..</h2>

      

              <Card className="auto">
        <Card.Img  variant="middle w-15 h-10" src={search}  />
        <Card.ImgOverlay>
        <Card.Body>
          <Card.Text ><h3>Let's Find The <span  style={{color:'red'}}> Best </span> Place for You..</h3>
            <div className='justify-content-center'>
              <br></br>
          {/* <MoreLands/> */}
<SortLands/>
</div>
      </Card.Text>
        </Card.Body>
        </Card.ImgOverlay>
      </Card>
      </div>

          
              
{/* 
              <Form.Group controlId="town" className="mt-3">
              <Form.Label>Town</Form.Label>
              
              <Form.Control input type="search"   value={query} onChange={handleChange}/> 

              </Form.Group> */}


              {/* <ul>
                {(state.query === '' ? "" : state.list.map(post => {
                  return <li key={post.title}>{post.title}</li> }))}
                  </ul> */}


              
            {/* <Form.Group controlId="noOfPerches" className="mt-3">
              <Form.Label>Required No of Perches</Form.Label>
              <Form.Control required type="integer"/>
              </Form.Group>
             
              <Form.Group controlId="budget" className="mt-3">
              <Form.Label>Budget Range </Form.Label>
              <Form.Control required type="long"/>
              </Form.Group> */}

              

              
              


          
</div>
)
}
