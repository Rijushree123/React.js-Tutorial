import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';



const App=()=>{
    const [num,setNum]=useState(0);
    const [nums,setNums]=useState(0);
    useEffect(()=>{
        alert("Iam clicked");
    },[num])

    return (
        <>
        <button style={{padding:'5px', fontSize:'1.5em'}} 
        onClick={()=>{setNum(num+1);}}
        >Click Me {num}</button>
        <br/>
        <button style={{padding:'5px', fontSize:'1.5em'}} 
        onClick={()=>{setNums(nums+1);}}
        >Click Me {nums}</button>
        </>
    );
};

export default App;
