import React, { useEffect, useState } from 'react';
import './landSearch.css';
import { Container, Button } from 'react-bootstrap';
import axios from 'axios';

export default function SortLands() {
    const [districts, setDistricts] = useState([]);
    const [towns, setTowns] = useState([]);
    const [purposes, setPurposes] = useState([]);
    const [priceRanges, setPriceRanges] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedTown, setSelectedTown] = useState('');
    const [selectedPurpose, setSelectedPurpose] = useState('');
    const [selectedPriceRange, setSelectedPriceRange] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const districtsResponse = await axios.get('http://localhost:8080/api/v1/lands/districts'); // Corrected endpoint
                setDistricts(districtsResponse.data);
    
                const townsResponse = await axios.get('http://localhost:8080/api/v1/lands/towns'); // Corrected endpoint
                setTowns(townsResponse.data);
    
                const purposesResponse = await axios.get('http://localhost:8080/api/v1/lands/purposes'); // Corrected endpoint
                setPurposes(purposesResponse.data);
    
                const priceRangesResponse = await axios.get('http://localhost:8080/api/v1/lands/price-ranges'); // Corrected endpoint
                setPriceRanges(priceRangesResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get('http://localhost:8080/api/lands/search', {
                params: {
                    district: selectedDistrict,
                    town: selectedTown,
                    purpose: selectedPurpose,
                    priceRangeId: selectedPriceRange,
                },
            });
            setSearchResults(response.data);
        } catch (error) {
            console.error('Error searching lands:', error);
        }
    };

    return (
        <div className="form ">
            <Container className='container_11'>
                <h4 fontFamily="italic" className='mt-2 center '> Discover Your <span className="text-warning">Dream Land</span> with us..</h4>
                <br />
                <div className='mt-2'>
                    <select id="ddlDistrict" className='form-control select-class' onChange={(e) => setSelectedDistrict(e.target.value)}>
                        <option value="">Select your Preference District</option>
                        {districts.map((district) => (
                            <option key={district} value={district.districtName}>{district.districtName}</option>
                        ))}
                    </select>
                    <br />
                    <select id="ddlTown" className='form-control select-class' onChange={(e) => setSelectedTown(e.target.value)}>
                        <option value="">Select Town</option>
                        {towns.map((town) => (
                            <option key={town} value={town.townName}>{town.townName}</option>
                        ))}
                    </select>
                    <br />
                    <select id="ddlPurpose" className='form-control select-class' onChange={(e) => setSelectedPurpose(e.target.value)}>
                        <option value="">Select Your Purpose</option>
                        {purposes.map((purpose) => (
                            <option key={purpose} value={purpose.purposeName}>{purpose.purposeName}</option>
                        ))}
                    </select>
                    <br />
                    <select id="ddlPrice" className='form-control select-class' onChange={(e) => setSelectedPriceRange(e.target.value)}>
                        <option value="">Select Price Range</option>
                        {priceRanges.map((priceRange) => (
                            <option key={priceRange.priceRangeId} value={priceRange.priceRangeId}>{priceRange.rangeName}</option>
                        ))}
                    </select>
                    <br />
                    <Button variant="dark" onClick={handleSearch}> Find </Button>
                </div>
                {/* Display search results */}
                {searchResults.length > 0 && (
                    <div>
                        <h3>Search Results</h3>
                        {searchResults.map((land) => (
                            <div key={land.landId}>
                                <h4>{land.landName}</h4>
                                <p>{land.district}, {land.town}</p>
                                {/* Add more land details here */}
                            </div>
                        ))}
                    </div>
                )}
            </Container>
        </div>
    );
}