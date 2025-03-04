import React from 'react'
import { Button, Form , Row, Col} from 'react-bootstrap'
import Navigation from '../../Navigation'

export default function AddLands() {

   
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "5vh" }}>
              <Button  variant="success" size="lg" href="/Admin">Back to Admin Dashboard</Button>
            </div>

    <div className="add-lands container h-auto bg-light p-5 rounded shadow">
      
      <h2 className="mb-4 text-center"> Lands Adding Form</h2>
     
      <Form>
        <Form.Group className="mb-3">
        <Form.Label>Land Name</Form.Label>
        <Form.Control type="text" name="landName" placeholder="Enter land name"/>
        </Form.Group>

<Row className="mb-3">
        <Col>
        <Form.Group>
        <Form.Label>Town</Form.Label>
        <Form.Control type="text" name="town"/>
        </Form.Group>
   </Col>
   <Col>
        <Form.Group>
        <Form.Label>District</Form.Label>
        <Form.Control type="text" name="district"/>
        </Form.Group>
</Col>
</Row>
        <Form.Group className="mb-3">
        <Form.Label>No of perches in land</Form.Label>
        <Form.Control type="text" name="perches"></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label>Price per perch</Form.Label>
        <Form.Control type="text" name="pricePerPerch"></Form.Control>
        </Form.Group>
 
        <Form.Group className="mb-3">
        <Form.Label>Perches per a plot</Form.Label>
        <Form.Control type="text" name="perchesPerPlot"></Form.Control>
        </Form.Group>
 
        <Form.Group className="mb-3">
        <Form.Label>Purpose</Form.Label>
        <Form.Select name="purpose">
            <option>Residential</option>
            <option>Business lands</option>
            <option>Agricultural</option>
        </Form.Select>
        </Form.Group>
 
        <Form.Group className="mb-3">
        <Form.Label>Status</Form.Label>
        <Form.Select name="status">
            <option>Available</option>
            <option>Sold</option>
            <option>Coming soon..</option>
        </Form.Select>
        </Form.Group>
 
        <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" name="description"></Form.Control>
        </Form.Group>
 
        <Form.Group className="mb-3">
        <Form.Label>Location (KML file or Map Screenshot)</Form.Label>
        {/* <input type="file" ref={locationFile}></input> */}
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label>Upload Pictures</Form.Label>
        {/* <input type="file" ref={picturesFile} multiple></input> */}
        </Form.Group>
 
        <Form.Group className="mb-3">
        <Form.Label>Land view image</Form.Label>
        {/* <input type="file" ref={landViewFile}></input> */}
        </Form.Group>

    <Button type="clear">Cancel</Button>
       
    <Button type="submit">Submit</Button>
      </Form>
    </div>
    </div>
  )
};
