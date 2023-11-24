import React, { useState } from 'react'
import { Card } from 'react-bootstrap';

export default function Find() {
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

    

    const [data, setData] = useState([]);

const fetchData = async (district, town, purpose, price) => {
  const response = await fetch(`https://localhost:8080/api/v1/land/getLandByDistrictTown?district=${district}&town=${town}&purpose=${purpose}&price=${price}`);
  const json = await response.json();
  setData(json);
};

const handleSelection = (district, town, purpose, price) => {
  fetchData(district, town, purpose, price);
};
return (
  <div>
    <select onChange={(event) => handleSelection(event.target.value, town, purpose, price)}>
      {/* options for district dropdown */}
    </select>
    <select onChange={(event) => handleSelection(district, event.target.value, purpose, price)}>
      {/* options for town dropdown */}
    </select>
    <select onChange={(event) => handleSelection(district, town, event.target.value, price)}>
      {/* options for purpose dropdown */}
    </select>
    <select onChange={(event) => handleSelection(district, town, purpose, event.target.value)}>
      {/* options for budget dropdown */}
    </select>
    {data.map((item) => (
      <Card key={item.id}>
        {item.district}
        {item.town}
        {item.purpose}
      </Card>
    ))}
  </div>
);
  
}
