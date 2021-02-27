import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOut = () => {
    return (
        <ul className="right">
            <li><NavLink to='/'>Sign Up</NavLink></li>
            <li><NavLink to='/'>Log In</NavLink></li>
        </ul>
    )
}

export default SignedOut;
