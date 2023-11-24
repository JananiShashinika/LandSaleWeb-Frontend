import React from 'react'
import { useEffect,useState } from 'react';
import './landSearch.css'
import { Container,Button,Stack } from 'react-bootstrap';


export default function SortLands() {


    const districts = [
        { id:"1",name:"Gampaha" ,value:"/yakkala"},
        { id:"2",name:"Kurunegala"},
        { id:"3",name:"Nuwara Eliya"},
        { id:"4",name:"Kandy"},
        { id:"5",name:"Kegalle"},
        // { id:"6",name:"All island"}
    ];
    const towns = [
        { id:"1",districtId:"1",name:"Kadawatha"},
        { id:"2",districtId:"1",name:"Yakkala"},    
        { id:"3",districtId:"1",name:"Kiribathgoda"},
        { id:"4",districtId:"1",name:"Wewaldeniya"},
        // { id:"5",districtId:"1",name:"Pasyala"},  //SO
        // { id:"6",districtId:"1",name:"Nittambuwa"},   //SO
        { id:"7",districtId:"1",name:"Mawaramandiya"},
        // { id:"8",districtId:"2",name:"Kurunegala"}, //SO
        { id:"9",districtId:"2",name:"Lake Round"},
        { id:"10",districtId:"3",name:"Hatton"},
        // { id:"11",districtId:"4",name:"Kandy"},   //SO
        { id:"12",districtId:"5",name:"Kegalle"},
    ];

    const purposes =[
        { id:"1",townId:"1",name:"Residence"},
        { id:"2",townId:"1",name:"Invest"},

        { id:"3",townId:"2",name:"Residence"},
        { id:"4",townId:"2",name:"Invest"},

        { id:"5",townId:"3",name:"Residence"},
        { id:"6",townId:"3",name:"Agricultural"},

        { id:"7",townId:"4",name:"All "},
        // { id:"8",townId:"5",name:"Sold Out"},
        // { id:"9",townId:"6",name:"Sold Out"},
        { id:"10",townId:"7",name:"All"},
        // { id:"11",townId:"8",name:"Sold Out"},
        { id:"12",townId:"9",name:"Invest"}, //Lake1
        { id:"13",townId:"10",name:"All"},
        // { id:"14",townId:"11",name:"Sold Out"},
        // { id:"15",townId:"12",name:"Constructing"}
    ]
    const prices = [
        { id:"1",purposeId:"1",name:"3-5 lakhs"},
        { id:"2",purposeId:"2",name:"Above 5 lakhs"},
        { id:"3",purposeId:"3",name:"3-5 lakhs"},
        { id:"4",purposeId:"4",name:"3-5 lakhs"},
        { id:"5",purposeId:"5",name:"3-5 lakhs"},
        { id:"6",purposeId:"6",name:"1-3 lakhs"},

        { id:"7",purposeId:"7",name:"1-3 lakhs"},
        { id:"8",purposeId:"7",name:"3-5 lakhs"},

        { id:"9",purposeId:"8",name:"-"},
        { id:"10",purposeId:"9",name:"-"},
        { id:"11",purposeId:"10",name:"1-3 lakhs"},
        { id:"12",purposeId:"10",name:"3-5 lakhs"},
        { id:"13",purposeId:"11",name:"-"},
        { id:"14",purposeId:"12",name:"3-5 lakhs"},
        { id:"15",purposeId:"13",name:"1-3 lakhs"},
        { id:"16",purposeId:"14",name:"-"},
        { id:"17",purposeId:"15",name:"Soon on"},   
    ];
    const [ district, setDistrict] = useState([]);
    const [ town, setTown] = useState([]);
    const [ purpose, setPurpose] = useState([]);
    const [ price, setPrice] = useState([]);

    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedTown, setSelectedTown] = useState('');
    const [selectedPurpose, setSelectedPurpose] = useState('');
    const [selectedPrice, setSelectedPrice] = useState('');


    useEffect(()=>{
        setDistrict(districts)
        fetch(`http://localhost:8080/api/v1/land/getLandByDistrict?district=${district}`)
    },[])
    const handleDistrict = (id) => {
        const dt = towns.filter(x=> x.districtId === id);
        setTown(dt);
        setSelectedDistrict(districts.find(x=>x.id===id).name);
    }
     
    useEffect(()=>{
        setTown(towns)
        fetch(`http://localhost:8080/api/v1/land/getLandByDistrictTown?district=${district}&town=${town}`)
    },[])
    const handleTown = (id) => {
        const dt = purposes.filter(x=> x.townId === id);
        setPurpose(dt);
        setSelectedTown(town.find(x=>x.id===id).name);
    }
    
    useEffect(()=>{
        setPurpose(purposes)
        fetch(`http://localhost:8080/api/v1/land/getLandByDistrictTownPurpose?district=${district}&town=${town}&purpose=${purpose}`)
    },[])
    
    const handlePurpose = (id) => {
        const dt = prices.filter(x=> x.purposeId === id);
        setPrice(dt);
        setSelectedPurpose(purpose.find(x=>x.id===id).name);
    }

    useEffect(()=>{
        setPrice(prices)
        fetch(`http://localhost:8080/api/v1/land/getLandByDistrictTownPurposePrice?district=${district}&town=${town}&purpose=${purpose}&price=${price}`)
    },[])

    const handlePrice = (id)=>{
        setSelectedPrice(price.find(x=>x.id===id).name);
    }


    const handleSearch=(e)=>{
        e.preventDefault();
        const searchParams = new URLSearchParams();
        if (selectedDistrict) searchParams.append('districts',selectedDistrict);
        if (selectedTown) searchParams.append('towns', selectedTown);
        if (selectedPurpose) searchParams.append('purpose', selectedPurpose);
        if (selectedPrice) searchParams.append('prices', selectedPrice);
      
        const queryString = searchParams.toString();
        const url = `http://localhost:8080/api/v1/land/getLandBySearchCriteria?${queryString}`;
      
        fetch(url,{
        method:"GET",
        headers:{"Content-Type":"application/json"},
      
    }).then(()=>{
      console.log("Land")
    })
      }

  return (
    <div className="form ">

<Container className='container_11'>
    <h4 fontFamily= "italic" className='mt-2 center '> Discover Your <span class="text-warning">Dream Land</span> with us..</h4>
          <br></br>
           <div className='mt-2'>
        <select id="ddlDistrict" className='form-control  select-class' onChange={(e)=> handleDistrict(e.target.value)} >
           
            <option value="0">Select your Preference District</option>
           {
                district &&
                district !== undefined ?
                district.map((district,id) => {
                    return(
                        <option key={id} value={district.id}>{district.name}</option>
                        )
                })
   :"No District"
            }
        </select>
        {/* <h1>{district}</h1> */}
        <br></br>
        <select id="ddlTown" className='form-control select-class' onChange={(e)=> handleTown(e.target.value)} >
            <option value="0">Select Town</option>
            {
                town &&
                town !== undefined ?
                town.map((ctr,index) => {
                    return(
                        <option key={index} value={ctr.id}>{ctr.name}</option>
                        )
                })
            :"No Town"
            }
        </select>  
        <br></br>

        <select id="ddlPurpose" className='form-control select-class' onChange={(e)=> handlePurpose(e.target.value)} >
            <option value="0">Select Your Purpose</option>
            {
                purpose &&
                purpose !== undefined ?
                purpose.map((ctr,index) => {
                    return(
                        <option key={index} value={ctr.id}>{ctr.name}</option>
                        )
                })
            :"No"
            }
        </select>

    
        <br></br>
        <select id="ddlPrice" className='form-control select-class' onChange={(e)=> handlePrice(e.target.value)}>
            <option value="0">Select Price Range</option>
            {
                price &&
                price !== undefined ?
                price.map((ctr,index) => {
                    return(
                        <option key={index} value={ctr.id}>{ctr.name}</option>
                        )
                })
            :"No "
            }
        </select>
       
    
       <br></br>
       
        <Button variant="dark" href="/find" onClick={handleSearch}> Find </Button> 
        

        {/* http://localhost:8080/api/v1/land/getLandByDistrict/ */}
        </div>
       </Container>
    </div>
  )
}
