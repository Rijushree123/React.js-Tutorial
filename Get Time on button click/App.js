import React, { useState } from 'react'





const App=()=>{
    let newTime = new Date().toLocaleTimeString();
    const state = useState();
    //console.log(state);
    const[ctime, setTime]= useState(newTime);
    const IncNum=()=>{
        newTime = new Date().toLocaleTimeString();
        setTime(newTime);
        console.log('clicked '+newTime);
    }
    return (
        <>
        <h1>{ctime}</h1>
        <button onClick={IncNum}>Click Me</button>
        </>
    );
};
export default App;