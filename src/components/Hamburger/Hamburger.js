import React from 'react'
import './Hamburger.scss'

export default function Hamburger(props) {
    return (
        <div className="hamburger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div>
                {props.menuItems.map(label => (
                    <li className="hamburger-menu-item">{label}</li>
                ))}
            </div>
        </div>
    )
}
