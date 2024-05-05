import React, { useState } from 'react';
import "./LoginRegister.css"
import { useParams } from 'react-router-dom';
import { signInUser, registerUser } from '../../services/firebase.js';
import TitleSectionMain from "../TitleSectionMain/TitleSectionMain.jsx";
import Button from "../Button/Button.jsx";
import { useNavigate } from 'react-router-dom';

const LoginRegister = () => {

    const {action} = useParams()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate("/user-info")

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            if (action === "login") {
                await signInUser(email, password)
            } else {
                await registerUser(email, password)
            }
            navigate("/user-info")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='loginRegister'>
            <div className='divLoginRegister'>
                <TitleSectionMain title={action === "login" ? "Iniciar Sesión" : "Registrarse"} />
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
                    <Button color={"btn-dark"} type={"submit"} >{action === "login" ? "Iniciar Sesión" : "Registrarse" }</Button>
                </form>
            </div>
            
        </div>
    );
}

export default LoginRegister;
