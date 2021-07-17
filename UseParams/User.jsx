import React from 'react';
import { useParams } from 'react-router-dom';

/*const User=({match})=>{
    return <h1>User {match.params.name} Page</h1>
}*/

const User=()=>{
    const {name, lname}=useParams();
    return <h1>User {name} {lname} Page</h1>
}

export default User;