import React from 'react';
import './Herocard.scss'
import Button from '../Button/Button'

 const Herocard = (props) => {
    return(
        <div className="hero-card">
           <h2>{props.heroCardTitle}</h2>
           <p>{props.heroCardBody}</p>
           <Button buttonText={props.buttonText}/>
        </div>
    );
}
export default Herocard;