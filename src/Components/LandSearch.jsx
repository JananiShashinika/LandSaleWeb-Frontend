// import React from 'react'
// import './landSearch.css'
// import { Container,Button,Stack } from 'react-bootstrap';
// import { Form,FormGroup,FormLabel,FormSelect,FormText } from 'react-bootstrap';
// import { useEffect,useState } from 'react';
// function LandSearch() {


//       const[district,setDistrict] = useState('')
//       const[town,setTown] = useState('')
//       const[purpose,setPurpose] = useState('')
//       const[price,setPrice] = useState('')

//       const[landSearch,setLandSearch] = useState([{'land_No':'','district':'','town':'','purpose':'','price':''}])
      
//       const handleClick=(e)=>{
//         e.preventDefault()
//         const land ={district,town,purpose,price}
//         console.log(land)
//         fetch("http://localhost:8080/api/v1/land/**",{
//         method:"GET",
//         headers:{"Content-Type":"application/json"},
//         body:JSON.stringify(land)
      
//     })
//     // const handleChange =(e) => {
//     //     setDistrict(e.target.value)
//     // }


//       } 
//   return (
    
//        <div >

// <Container className='container'>
// <Form >
// <FormText>
//     <h4 fontFamily="italic" className='mt-2'> Discover Your
//     <span class="text-warning">Dream Land</span> with us..</h4>    
//     </FormText>   
    
//  {/* District   */}
//           <Form.Group required= "required" controlId="searchDistrict" className="mt-5">
//           <Form.Label >Select your Preference District</Form.Label>
//           <Form.Select aria-label="District"  value={district} name="district"
//           onChange={(e)=>setDistrict(e.target.value)} > 
          
//           {landSearch.map(district =>(
//             <option value={land.district} key={land.land_no}>{land.district}</option> ))}
//             </Form.Select>
//            </Form.Group>
//   {/* Town   */}
//            <Form.Group required= "required" controlId="searchTown" className="mt-5">
//           <Form.Label >Select Town</Form.Label>
//           <Form.Select aria-label="Town"  value={district} name="town"
//           onChange={(e)=>setTown(e.target.value)} > 
          
//           {landSearch.map(town =>(
//             <option value={land.town} key={land.land_no}>{land.town}</option> ))}
//             </Form.Select>
//            </Form.Group>
// {/* Purpose */}
//            <Form.Group required= "required" controlId="searchPurpose" className="mt-5">
//           <Form.Label >Select Purpose</Form.Label>
//           <Form.Select aria-label="Purpose"  value={purpose} name="purpose"
//           onChange={(e)=>setPurpose(e.target.value)} > 
          
//           {landSearch.map(town =>(
//             <option value={land.purpose} key={land.land_no}>{land.purpose}</option> ))}
//             </Form.Select>
//            </Form.Group>
// {/* Price */}
//            <Form.Group required= "required" controlId="searchPrice" className="mt-5">
//           <Form.Label >Price range </Form.Label>
//           <Form.Select aria-label="Price"  value={price} name="price"
//           onChange={(e)=>setPrice(e.target.value)} > 
          
//           {landSearch.map(price =>(
//             <option value={land.price} key={land.land_no}>{land.price}</option> ))}
//             </Form.Select>
//            </Form.Group>
       



//         <Button variant="dark" href="/find"> Find </Button> 
//         </Form>
        
//        </Container>
//     </div>
  
//   )
// }

// export default LandSearch
import React from 'react'

export default function LandSearch() {
  return (
    <div>
      
    </div>
  )
}
