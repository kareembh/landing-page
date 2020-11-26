import React from 'react'
import MediaQuery from 'react-responsive'

import './Navbar.scss';

const menuItems = [
    'Portfolio',
    'Services',
    'About me',
    'Contact',
];

const Navbar = () => (
    <div className="navbar">
        <div className="branding">
            <h3>Kareem B. Henry</h3>
        </div>
        <div className="navbar-menu-container">
            <MediaQuery minWidth={768}>
                <ul className="navbar-menu">
                    {menuItems.map(label => (
                        <li className="navbar-menu-item">{label}</li>
                    ))}
                </ul>
            </MediaQuery>
            <MediaQuery maxWidth={768}>
                <button>🍔</button>
            </MediaQuery>
        </div>
    </div>
)

export default Navbar;