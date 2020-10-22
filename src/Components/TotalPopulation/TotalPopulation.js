import React from 'react';

const TotalPopulation = (props) => {
    const population = props.population;
    // const total = population.reduce((total, ppl) => total + ppl.population, 0)
    return (
        <div>
            <h4 className='text-danger mt-4 ml-2'>Total Population : </h4>
            <div>
                {
                    population.map(ppl => {
                        return(
                            <ul className='list-group mb-2 shadow'>
                                <li className='list-group-item'>
                                    <div style={{width: '100px'}}><img className='img-fluid' src={ppl.flag} alt=""/></div>
                                    {ppl.name} : {ppl.population}
                                </li>
                            </ul>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default TotalPopulation;