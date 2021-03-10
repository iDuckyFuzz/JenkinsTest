import React from 'react';
import './Button.css';

const Button = (props) => {
    return (
        <div className="button-style" data-testid="button">{props.label}</div>
    )
}

export default Button;