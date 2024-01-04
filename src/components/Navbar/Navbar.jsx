import React from 'react';
import { faInbox, faBell, faUserCircle } from '@fortawesome/free-solid-svg-icons'; // Replace with actual icons

const Navbar = () => {
    return (
        <nav className="navbar">
            {/* Other navbar content */}
            <div className="navbar-icons">
                <faInbox />
                <faBell />
                <faUserCircle /> {/* This can be an avatar component */}
            </div>
        </nav>
    );
};

export default Navbar;
