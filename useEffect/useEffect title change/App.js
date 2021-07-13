import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';



const App=()=>{
    const [num,setNum]=useState(0);
    
    useEffect(()=>{
        //alert("Iam clicked");
        document.title=`you clicked me ${num} times`;
    })

    return (
        <>
        <button style={{padding:'5px', fontSize:'1.5em'}} 
        onClick={()=>{setNum(num+1);}}
        >Click Me {num}</button>
        <br/>
        
        </>
    );
};

export default App;
