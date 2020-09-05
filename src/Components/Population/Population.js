import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const Population = () => {
    const { countryArea } = useParams();

    const [country, setCountry] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => {setCountry(data)})
    },[])
    const selectedCountry = country.slice(0, 12);
   
    const area = selectedCountry && selectedCountry.find(ct => ct.area === countryArea);
    console.log(area);
    return (
        <div className='bg-danger w-50 p-3 shadow mx-auto rounded mt-5 text-center text-white'>
           <h2 className=''>Country List</h2> 
    <h3>{countryArea}</h3>
        </div>
    );
};

export default Population;