import React, { useState } from 'react'





const App=()=>{
    //let time = new Date().toLocaleTimeString();
    const state = useState();
    const purple="purple";
    const cname ="Click Me";
    const [bg,setbg]=useState(purple);
    const [name,setname]=useState(cname);
    //console.log(state);
    //const[ctime, setTime]= useState(time);
    const bgChange=()=>{
        let newbg="#34495e";
        setbg(newbg);     
        setname("Ouch!! 👩‍❤️‍👨");   
    }
    const bgBack=()=>{
        let newbg="purple";
        setbg(newbg);     
        setname("Ayyoo!! 😠");       
    }
    //setInterval(bg,1000);
    return (
        <>
        <div className="parent" style={{backgroundColor: bg}}>
            <button onMouseEnter ={bgChange} onMouseLeave={bgBack}>{name}</button> 
        </div>
        </>
    );
};
export default App;