import React from 'react';
import './Friend.css';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const {name, email, id } = props.friend;
    // const fullId = `${id.name} ${id.value}`;
    const history = useHistory()

    const handleClick = (friendId) => {
        history.push(`/friend/${friendId}`)
    } 

    console.log(props.friend);
    return (
        <div className='single-friend'>
            <h2>Name : {name}</h2>
            <p>Email: {email}</p>
            <Link to={`/friend/${id}`}>Show details</Link>
            <button onClick={() => handleClick(id)}>add me</button>
        </div>
    );
};

export default Friend;