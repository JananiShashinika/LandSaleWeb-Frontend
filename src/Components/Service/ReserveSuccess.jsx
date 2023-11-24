import React from 'react'
import Navigation from '../Navigation'
import { Button } from 'react-bootstrap'
import { Box } from '@mui/material'
import { useState,handleUploadClick,handleFileChange } from 'react';

export default function ReserveSuccess() {
    
  // const [name, setName] = useState("");
  // const [selectedFile, setSelectedFile] = useState(null);

  // const submitForm = () => {
  //   const formData = new FormData();
  //   formData.append("name", name);
  //   formData.append("file", selectedFile);
  
  //   axios
  //     .post("http://localhost:8080/api/v1/Receipt/Upload", formData)
  //     .then((res) => {
  //       alert("File Upload success");
  //     })
  //     .catch((err) => alert("File Upload Error"));
  // };
  
  return (
    <div>
        <Navigation/>
<br/>
<Button  variant="outline-success" size="lg" href='/reserve'> Back</Button>
<Box>
        <div style={{color: "black",fontSize:"30px", fontFamily:"monospace" ,fontWeight:"bold",width:"100%",height:"200px",textAlign:"center"}}>
        <span style={{color:'red'}}><h3><b>You have Reserved the Land for 10 days !</b></h3></span>
            
            <br></br>
            <h4>Our Land Agent contact you soon..</h4>
            <h2>THANK YOU</h2>

        </div>
        </Box>
{/* ------------- */}
        {/* <div>
      <input type="file" onChange={handleFileChange} />

      <div>{file && `${file.name} - ${file.type}`}</div>

      <button onClick={handleUploadClick}>Upload</button>
    </div>
    <div className="ReserveSuccess">
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <FileUploaded
          onFileSelectSuccess={(file) => setSelectedFile(file)}
          onFileSelectError={({ error }) => alert(error)}
        />

        <button onClick={submitForm}>Submit</button>
      </form>
    </div> */}




    </div>
  )


}