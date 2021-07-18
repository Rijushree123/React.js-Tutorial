import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home.jsx';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Navbar from './Navbar';
import User from './User';
import Search from './Search';
const App=() =>{
    const Name=()=>{
        return <h1>Hello, I am a Name Page</h1>
    };

    return (
        <>
        <Navbar/>
        <Switch>
                <Route exact path='/' component={()=><Home name='Home'/>} />
                <Route exact path='/contact' render={()=><Contact name='Contact'/>} />
                <Route exact path='/about' component={()=><About name='About'/>} />
                <Route exact path='/search' component={Search} />
                <Route exact path='/contact/Name' component={Name} />
                <Route  path='/user/:name/:lname' component={User} />
                <Route component={Error} />
                <Redirect to="/"></Redirect>
        </Switch>
            {/*<About/>
            <Contact/>*/}
        </>
        )
};
export default App;