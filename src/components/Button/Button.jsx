import React from 'react';
import "./Button.css"

const Button = ({children, color, onFinish, enabledDisabled, type, isPressed}) => {


    return (
        <button 
            type={type ? type : "button"} 
            className={`btn ${color}`} 
            onClick={onFinish} 
            disabled={enabledDisabled}
            data-bs-toggle={isPressed ? "button" : ""}
        >
            {children}
        </button>
    );
}

export default Button;
