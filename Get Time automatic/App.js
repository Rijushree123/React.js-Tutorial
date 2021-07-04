import React, { useState } from 'react'





const App=()=>{
    let time = new Date().toLocaleTimeString();
    const state = useState();
    //console.log(state);
    const[ctime, setTime]= useState(time);
    const UpdateTime=()=>{
        time = new Date().toLocaleTimeString();
        setTime(time);
        //console.log('clicked '+newTime);
    }
    setInterval(UpdateTime,1000);
    return (
        <>
        <div className="parent">
        <h1>{ctime}</h1>
        </div>
        </>
    );
};
export default App;