import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css';

const Country = (props) => {
    const { name, flag, population, area } = props.country;
    console.log(props.country);



    return (
        <div className='col-md-4 country-details'>
            <div className="single-country text-center my-4">
                <div className="p-2">
                    <div className="flag-img">
                    <img className='card-img-top' src={flag} alt="" />
                    </div>
                    <div className="card-body">
                        <h4 className='card-title'><Link style={{ textDecoration: 'none' }} className='link' to={'/'+area}>{name}</Link></h4>
                        <p>Population: {population}</p>
                        <Link style={{ textDecoration: 'none' }} className=' show-details' to={`/country/${name}`}>Show Details</Link>
                        <button onClick={() => props.handleAddButton(props.country)} className='btn btn-danger mt-2'>Add Country</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Country;