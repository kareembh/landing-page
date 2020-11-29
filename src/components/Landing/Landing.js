import React from 'react';
import Herocard from '../Herocard/Herocard'
import './Landing.scss'

export default function Landing() {
    return (
        <div className="content-container">
            <Herocard 
                heroCardTitle="Lorem ipsum dolor"
                heroCardBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor ultricies sollicitudin eget tellus nec orci, mi. Pharetra sit egestas sit amet, purus. Eget ornare faucibus et volutpat. In elit adipiscing massa non magna id."
                buttonText="Contact"
            />
        </div>
    )
}
