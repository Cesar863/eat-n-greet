import { Link } from 'react-router-dom';
import React from 'react';
import 'react-bootstrap';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1 className="text-danger">React Blog App</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Create Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;