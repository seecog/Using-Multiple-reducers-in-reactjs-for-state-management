import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navigation.css';
const Navigation = ()=>{
    let linkStyle = {
        color : 'green'
    }
    return (
    <div>
    <NavLink exact activeStyle={linkStyle} to="/">Home </NavLink> | 
    <NavLink activeStyle={linkStyle} to="/about">About </NavLink> | 
    <NavLink activeStyle={linkStyle} to="/contact">Contact </NavLink>  |
    <NavLink activeStyle={linkStyle} to="/talks">Talks </NavLink> 
    </div> 
    )
// return (
//     <div>
//     <NavLink exact activeClassName="mylink" to="/">Home </NavLink> | 
//     <NavLink activeClassName="mylink" to="/about">About </NavLink> | 
//     <NavLink activeClassName="mylink" to="/contact">Contact </NavLink> 
//     </div> 
// )
}

export default Navigation;