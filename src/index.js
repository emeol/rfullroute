import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';

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
            <NavLink to="/" activeStyle={{color:'red'}}>
                    Home</NavLink>
            <NavLink to="/post">Post</NavLink>
            <NavLink to={{ pathname:'/profile'}}>Profile</NavLink>                
        </header>

        <Route path="/" exact component={Home}/>
        <Route path="/post" exact component={Post}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/post/:id" component={PostItem}/>

    </div>
    </BrowserRouter>
)
}

ReactDOM.render(<App/>, document.querySelector('#root'));