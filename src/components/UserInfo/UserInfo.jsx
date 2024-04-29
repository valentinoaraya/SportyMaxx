import React, {useState, useEffect} from 'react';
import { getCurrentUser, signOutUser, getCurrentUserRole } from "../../services/firebase.js";
import { Link } from 'react-router-dom';
import Button from '../Button/Button.jsx';
import "./UserInfo.css"

const UserInfo = () => {

    const [user, setUser] = useState(null);
    const [role, setRole] = useState(null);

    useEffect(() => {
        const checkUser = async () => {
            try {
                const user = getCurrentUser();
                setUser(user);
                setRole( await getCurrentUserRole());
            } catch (error) {
                console.log(error);
            }
        }

        checkUser();
    },[user])

    const handleSignOut = async () => {
        try {
            await signOutUser();
            setUser(null);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            {
                user ? 
                <div>
                    <p>Hola {user.email}</p> 
                    {
                        role && 
                        <div>
                            <p>Tu rol es: {role}</p>
                            <Link to={"/add-product/"}> <Button color={"btn-dark"}>Agregar Producto</Button> </Link>
                        </div>
                    }
                    <Button color={"btn-dark"} onFinish={handleSignOut} >Cerrar Sesión</Button>
                </div>
                :
                <div>
                    <p>¿Tienes cuenta?</p>
                    <Link to="/user/login">Iniciar sesion</Link>
                    <p>¿No tienes cuenta?</p>
                    <Link to="/user/register">Registrarse</Link>
                </div> 
            }
        </div>
    )
}

export default UserInfo;
