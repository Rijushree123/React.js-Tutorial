import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import logo from './Images/logo.jpg';

const Header=()=>{
    return(
        <>
            <div className='header'>
                    <img src={logo} alt="logo" width='70' height='50'/>
                    <h1>Riju Technical</h1>
            </div>
        </>
    );
};

export default Header;