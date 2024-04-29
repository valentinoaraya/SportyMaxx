import React, { useState } from 'react';
import "./LoginRegister.css"
import { useParams } from 'react-router-dom';
import { signInUser, registerUser } from '../../services/firebase.js';

const LoginRegister = () => {

    const {action} = useParams()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        try{
            if (action === "login") {
                signInUser(email, password)
            } else {
                registerUser(email, password)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit} className="formLoginRegister">
                    <label>
                        Correo Electrónico:
                        <input type="email" name="email" id="email" placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                            required
                        />
                    </label>
                    <label>
                        Contraseña:
                        <input type="password" name="password" id="password" placeholder="Password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                    <input type="submit" value={action === "login" ? "Iniciar Sesión" : "Registrarse" } />
                </form>
            </div>
            
        </div>
    );
}

export default LoginRegister;
