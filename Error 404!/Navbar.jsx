import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar=()=>{
    return (
        <>
            <div className="menu_style">
            <NavLink exact activeClassName='active_class' to='/'> Home
            </NavLink>
            <NavLink exact activeClassName='active_class' to='/contact'> Contact Us 
            </NavLink>
            <NavLink exact activeClassName='active_class' to='/about'> About Us 
            </NavLink>
            {/*<NavLink exact activeClassName='active_class' to='/search'> Search 
            </NavLink>
            <NavLink exact activeClassName='active_class' to='/user/Rijushree/Guha'> User 
            </NavLink>*/}
            
            </div>
        </>
    );
};
export default Navbar;