import React from 'react';
import "./VerifyEmailContainer.css"
import { useParams } from 'react-router-dom';

const VerifyEmailContainer = () => {

    const {email} = useParams()    

    return (
        <div className='divVerifyEmailContainer'>
            <h3>✅ Enviamos un correo de verificación a <span>{email}</span>.</h3>
            <h3>Por favor, revisa tu correo y presiona el enlace de verificación.</h3>
        </div>
    );
}

export default VerifyEmailContainer;