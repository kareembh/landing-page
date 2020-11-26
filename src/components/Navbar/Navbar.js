import React from 'react'
import MediaQuery from 'react-responsive'

import './Navbar.scss';

const portfolio ='Portfolio';
const services ='Services';
const aboutMe ='About me';
const contact ='Contact';


const Navbar = () => {
    return (
        <div className="navbar">
            <div className="branding">
                <h3>Kareem B. Henry</h3>
            </div>
            <div className="navbar-menu-container">
                <MediaQuery minWidth={768}>
                    <ul className="navbar-menu">
                        <li className="navbar-menu-item">{portfolio}</li>
                        <li className="navbar-menu-item">{services}</li>
                        <li className="navbar-menu-item">{aboutMe}</li>
                        <li className="navbar-menu-item">{contact}</li>
                    </ul>
                </MediaQuery>
                <MediaQuery maxWidth={768}>
                    <button>🍔</button>
                </MediaQuery>
            </div>
        </div>
    )
}
export default Navbar;