import React from 'react';
import View from './View.jsx';
const App=() =>{
    return (
        <>
        <div className='parent' 
        style={{height:'100vh', width:'100vw', backgroundColor:'pink',
        display:'flex', justifyContent:'center', alignItems:'center'}}>   
        <View ></View>
        </div>
        </>)
}
export default App;