import React, { useState } from 'react'
import ReactDOM from 'react-dom'



let count = 1;


const App=()=>{
    const state = useState();
    //console.log(state);
    const[count, setCount]= useState(0);
    const IncNum=()=>{
        setCount(count+1);
        console.log('clicked '+count);
    }
    return (
        <>
        <h1>{count}</h1>
        <button onClick={IncNum}>Click Me</button>
        </>
    );
};
export default App;