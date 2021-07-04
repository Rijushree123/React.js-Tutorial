import React, { useState } from 'react'





const App=()=>{
    
    const[name,setName] = useState("");
    const[fullName,setFullName] = useState();

    const[lastname,setLastName] = useState("");
    const[lastnamenew,setLastNamenew] = useState();

    

    const onSubmits = (event) =>{
        event.preventDefault();
        setFullName(name);
        setLastNamenew(lastname);
    }
    const inputEvent = (event) =>{
        console.log(event.target.value);
        setName(event.target.value);
    }
    const inputEvent2 = (event) =>{
        console.log(event.target.value);
        setLastName(event.target.value);
    }




    return (
        <>
        <div className="main_div">
            <form onSubmit={onSubmits}>
                <div>
                    <h1>Hello {fullName} {lastnamenew}</h1>
                    <br/>
                    <input type="text" 
                    placeholder="Enter Your First Name"  
                    onChange={inputEvent} value={name}></input>
                    <br/>
                    <input type="text" 
                    placeholder="Enter Your Last Name"  
                    onChange={inputEvent2} value={lastname}></input>
                    <button type='submit' onClick={onSubmits}>Submit Me 👍</button> 
                </div>
            </form>
        </div>
        </>
    );
};
export default App;