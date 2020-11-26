import React from 'react';
import './Herocard.scss'
import Button from '../Button/Button'

const Herocard = props => (
    <div className="hero-card">
        <h2 className="hero-card-title">{props.heroCardTitle}</h2>
        <p className="hero-card-body">{props.heroCardBody}</p>
        <Button className="btn" buttonText={props.buttonText}/>
    </div>
);

export default Herocard;