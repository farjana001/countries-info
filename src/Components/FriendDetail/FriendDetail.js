import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
        .then(res => res.json())
        .then(data => setFriend(data));  
    }, [])
    return (
        <div>
    <p>Name : {friend.name}</p>
    <p>Email : {friend.email}</p>
        </div>
    );
};

export default FriendDetail;