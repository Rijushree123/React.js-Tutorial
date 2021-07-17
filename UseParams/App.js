import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Navbar from './Navbar';
import Service from './Service';
import User from './User';
const App=() =>{
    const Name=()=>{
        return <h1>Hello, I am a Name Page</h1>
    };

    return (
        <>
        <Navbar/>
        <Switch>
            
                <Route exact path='/' component={()=><About name='About'/>} />
                <Route exact path='/contact' render={()=><Contact name='Contact'/>} />
                <Route exact path='/service' component={Service} />
                <Route exact path='/contact/Name' component={Name} />
                <Route  path='/user/:name/:lname' component={User} />
                <Route component={Error} />

        </Switch>
            {/*<About/>
            <Contact/>*/}
        </>
        )
};
export default App;