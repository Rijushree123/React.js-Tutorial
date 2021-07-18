import React from 'react';
import { useState } from 'react';
import Sresult from './Sresult';
const Search=()=>{
    const [img, setImg]=useState("");
    const inputEvent=(event)=>{
        const data = event.target.value;
        setImg(data);
    }
    return (
    <>
    <div className='searchbar'>
        <input type="text" 
        placeholder="Search anything" 
        value={img}
        onChange={inputEvent}/>
    </div>
    {img===""?(<Sresult name='not found'/>):<Sresult name={img}/>}
    </>
    )
};
export default Search;