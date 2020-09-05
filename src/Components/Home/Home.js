import React, { useState, useEffect } from 'react';
import Country from '../Country/Country';
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TotalPopulation from '../TotalPopulation/TotalPopulation';

const Home = () => {
    const [country, setCountry] = useState([]);
    const [population, setPopulation] = useState([]);

    const handleAddButton = (countryPopulation) => {
        const newPopulation =  [...population, countryPopulation];
        setPopulation(newPopulation);
    };

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountry(data))
    }, []);

    const selectedCountry = country.slice(0, 12);

    return (
        <div className='country-body'>
            <div className="row country">
                <div className="col-md-9 row border-right">
                    {
                        selectedCountry.map(country => <Country key={country.area} country={country} handleAddButton={handleAddButton}></Country>)
                    }
                </div>
                <div className="col-md-3">
                    <TotalPopulation population={population}></TotalPopulation>
                </div>
            </div>
        </div>
    );
};

export default Home;