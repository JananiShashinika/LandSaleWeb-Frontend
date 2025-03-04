import React from 'react'
import { Button } from 'react-bootstrap'
import { Paper } from '@mui/material'
import Navigation from '../../Navigation'
import Header from '../../Header'

export default function Customer() {

  const paperStyle = {
    padding: "20px", 
    width: 280, 
    margin: "10px", 
    background: "white", 
    borderRadius: "8px", 
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center"
  }

  return (
    <div className="bg-secondary d-flex flex-column align-items-center " style={{ minHeight: "100vh" }}>
      <Header/>
      <Navigation />

      <h2 className="text-center mt-3" style={{ fontSize: "2rem", fontWeight: "bold", color: "#2C3E50" }}>
        <span style={{color: 'maroon'}}>Dream</span><span style={{color: 'green'}}>Lands</span> Customer Dashboard
      </h2>

      <div className="d-flex flex-wrap justify-content-center mt-4" style={{ maxWidth: "800px" }}>
        <Paper elevation={3} style={paperStyle}>
          <Button variant="outline-success" size="md" href="/appointment" style={buttonStyle}>
            <h4>Request an Appointment</h4>
          </Button>
        </Paper>

        <Paper elevation={3} style={paperStyle}>
          <Button variant="outline-success" size="md" href="/search" style={buttonStyle}>
            <h4>Search Lands</h4>
          </Button>
        </Paper>

        <Paper elevation={3} style={paperStyle}>
          <Button variant="outline-success" size="md" href="/comment" style={buttonStyle}>
            <h4>Add a Comment</h4>
          </Button>
        </Paper>

        <Paper elevation={3} style={paperStyle}>
          <Button variant="outline-success" size="md" href="/book" style={buttonStyle}>
            <h4>Book a Land</h4>
          </Button>
        </Paper>
        
        <Paper elevation={3} style={paperStyle}>
          <Button variant="outline-success" size="md" href="/reserve" style={buttonStyle}>
            <h4>Reserve a Land</h4>
          </Button>
        </Paper>

        <Paper elevation={3} style={paperStyle}>
          <Button variant="outline-success" size="md" href="/sell" style={buttonStyle}>
            <h4>Sell Your Land</h4>
          </Button>
        </Paper>

        
      </div>
    </div>
  )
}

const buttonStyle = {
  borderRadius: "5px", 
  width: "100%", 
  padding: "8px", 
  textAlign: "center", 
  fontSize: "1rem", 
  transition: "background-color 0.3s ease",
};
