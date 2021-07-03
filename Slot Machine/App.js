import { BorderAll, FormatAlignJustify, Height } from '@material-ui/icons';
import React from 'react';
import ReactDOM from 'react-dom';
import Slot from './Slot.jsx';



const App=()=>{
    return <>
        <h1 className="heading_style"> 
        🎰 Welcome to <span style={{fontWeight:"BOLD"}}>Slot Machine Game 🎰</span>
        </h1>
        <div className="slotmachine" style={{width:"25%", Height:"auto",  padding: "30px 0",  fontFamily:"Raleway,sans-serif", boxSizing:"border-box", border :"10px solid black", marginLeft:"37.5%"}}>
        <Slot x='😄' y='😄' z= '😄'/>
        <Slot x='😄' y='👧' z= " 🍍 "/>
        <Slot x='🎅' y='😄' z= '😄'/>
        </div>
    </>
};
export default App; 