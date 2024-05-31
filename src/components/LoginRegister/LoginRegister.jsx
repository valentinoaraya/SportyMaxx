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
    const [telefono, setTelefono] = useState("")
    const [direccion, setDireccion] = useState("")
    const [disabledButton, setDisabledButton] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabledButton(true)
        try{
            if (action === "login") {
                await signInUser(email, password)
                navigate("/user-info")
            } else {
                await registerUser(nombre, telefono, direccion, email, password)
                navigate(`/verify-email/${email}`)
            }
        } catch (error) {
            setDisabledButton(false)
            notify()
        }
    }

    const notify = () => toast.error(action === "login" ? "Error al iniciar sesión" : "Error al registrar usuario", {
        theme: "colored",
        pauseOnHover: false
    })

    const innerButton = () => {
        if (action === "login" && !disabledButton) {
            return "Iniciar Sesion"
        } else if (action === "login" && disabledButton) {
            return "Iniciando sesion..."
        } else if (action === "register" && !disabledButton) {
            return "Registrarse"
        } else if (action === "register" && disabledButton) {
            return "Registrando..."
        }
    }

    return (
        <div className='loginRegister'>
            <div className='divLoginRegister'>
                <h2>{action === "login" ? "Iniciar Sesión" : "Registrarse"}</h2>                
                <form onSubmit={handleSubmit} className="formLoginRegister">
                    {
                        action === "register" &&
                        <div className='divInputsRegister'>
                            <label>
                                Nombre y apellido:
                                <input type="text" name="text" id="text" placeholder="Nombre y apellido"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)} 
                                    required
                                />
                            </label>
                            <label>
                                Telefono:
                                <input type="text" name="text" id="text" placeholder="Telefono"
                                    value={telefono}
                                    onChange={(e) => setTelefono(e.target.value)} 
                                    required
                                />
                            </label>
                            <label>
                                Dirección:
                                <input type="text" name="text" id="text" placeholder="Direccion"
                                    value={direccion}
                                    onChange={(e) => setDireccion(e.target.value)} 
                                    required
                                />
                            </label>
                        </div>
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
                    <Button color={"btn-dark"} enabledDisabled={disabledButton} type={"submit"} >{innerButton()}</Button>
                </form>
                <ToastContainer
                    autoClose={2000}
                />
            </div>
        </div>
    );
}

export default LoginRegister;
