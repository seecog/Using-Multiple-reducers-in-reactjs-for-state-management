import React from 'react';
import {Redirect} from 'react-router-dom'
const Contact = ()=>{
return (
    <div>
     <Redirect to="/about"/>   
    <h1>Contact Page</h1>
    </div>
)
}

export default Contact;