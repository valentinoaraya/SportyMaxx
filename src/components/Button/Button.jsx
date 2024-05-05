import React from 'react';
import "./Button.css"

const Button = ({children, color, onFinish, enabledDisabled, type}) => {
    return (
        <button type={type ? type : "button"} className={`btn ${color}`} onClick={onFinish} disabled={enabledDisabled}>
            {children}
        </button>
    );
}

export default Button;
