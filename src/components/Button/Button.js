import React from 'react';
import './Button.scss';

export default function Button(props) {
    return (
        <div>
            <button>{props.button-text}</button>
        </div>
    )
}
