import React from 'react'
import './topicbox.css'
import { Container } from 'react-bootstrap'


export default function TopicBox() {
  const topic = "Dream Lands"
  const subtopic = "    Get your Dream Land Today !"


  return (
    

    
    
        <div className="topicBox">

          {/* <Container className='logo'>
          <img src="/img/logo.png"  alt="Logo image" />
          </Container> */}

            <span className="text"> {topic}  <span  className="\n subtopic" > {subtopic} </span> </span>

        </div>
    
    
  )
}
