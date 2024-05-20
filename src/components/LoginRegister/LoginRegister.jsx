import React, { useState } from 'react';
import "./LoginRegister.css"
import { useParams } from 'react-router-dom';
import { signInUser, registerUser } from '../../services/firebase.js';
import Button from "../Button/Button.jsx";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const LoginRegister = () => {

    const {action} = useParams()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [nombre, setNombre] = useState("")
    const [disabledButton, setDisabledButton] = useState(false)

    const navigate = useNavigate("/user-info")

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabledButton(true)
        try{
            if (action === "login") {
                await signInUser(email, password)
            } else {
                await registerUser(nombre, email, password)
            }
            navigate("/user-info")
        } catch (error) {
            setDisabledButton(false)
            notify()
        }
    }

    const notify = () => toast.error(action === "login" ? "Error al iniciar sesión" : "Error al registrar usuario", {
        theme: "colored",
        pauseOnHover: false
    })

    return (
        <div className='loginRegister'>
            <div className='divLoginRegister'>
                <h2>{action === "login" ? "Iniciar Sesión" : "Registrarse"}</h2>                
                <form onSubmit={handleSubmit} className="formLoginRegister">
                    {
                        action === "register" &&
                        <label>
                            Nombre y apellido:
                            <input type="text" name="text" id="text" placeholder="Nombre y apellido"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)} 
                                required
                            />
                        </label>
                    }

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
                    <Button color={"btn-dark"} enabledDisabled={disabledButton} type={"submit"} >{action === "login" ? "Iniciar Sesión" : "Registrarse" }</Button>
                </form>
                <ToastContainer
                    autoClose={2000}
                />
            </div>
        </div>
    );
}

export default LoginRegister;
