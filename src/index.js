import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, NavLink, Switch} from 'react-router-dom';

//components
import Home from './components/home';
import Post from './components/post';
import Profile from './components/profile';
import PostItem from './components/post_item';


const App=()=>{
return(
    <BrowserRouter>
    <div>
        <header>
            <NavLink to="/"> Home</NavLink>
            <NavLink to="/post">Post</NavLink>
            <NavLink to={{ pathname:'/profile'}}>Profile</NavLink>                
        </header>
    <Switch>        
        <Route path="/post/:id" component={PostItem}/>
        <Route path="/post"  component={Post}/>
        <Route path="/profile" component={Profile}/>        
        <Route path="/"  component={Home}/>
    </Switch>
    </div>
    </BrowserRouter>
)
}

ReactDOM.render(<App/>, document.querySelector('#root'));