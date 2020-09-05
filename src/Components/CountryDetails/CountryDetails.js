import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    const { countryName } = useParams();

    const [ country, setCountry ] = useState({});
    const { name, nativeName, flag, population, capital, currencies, altSpellings, borders} = country;

   
    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
        .then(res => res.json())
        .then(data => setCountry(data[0]))
    }, [countryName]);
    
    return (
        <div className='col-md-8 text-center mt-5 pt-5 single-country'>
            <img style={{width: '300px'}} className='img-fluid mb-3' src={flag} alt=""/>
            <h3>{name}</h3>
            <p>Native Name : {nativeName}</p>
            <p>Capital : {capital}</p>
            <p className=''>Population: {population}</p>
            {
                country.currencies && <p>Currencies : {currencies[0]["code"]}, {currencies[0]["name"]} {currencies[0]["symbol"]}</p>
            }
            {
                country.name && <p>Border : {borders[0]} {borders[1]}</p>
            }
            {
                country.name && <p>altSpellings : {altSpellings}</p>
            }
            {
                country.altSpellings && <p>altSpellings : {altSpellings.map(alt => <span key={country.name + Math.random()}>{alt}, </span>)}</p>
            }
            {/* <p>{altSpellings}</p> */}
            <button className='btn btn-danger my-2'>Add Country</button>
        </div>
    );
};

export default CountryDetails;