import React from 'react';
import { Link } from 'react-router-dom';
import SignedIn from './signin';
import SignedOut from './signout';

const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Project Planner</Link>
                <SignedIn />
                <SignedOut />
            </div>
        </nav>
    )
}

export default Navbar;
