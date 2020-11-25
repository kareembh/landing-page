import React from 'react';
import './Herocard.scss'

export default Herocard = (props) =>{
    return(
        <div>
            <h2>{props.hero-card-title}</h2>
            <p>{props.hero-card-body}</p>   
        </div>
    );
}

