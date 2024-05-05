import React, {useState, useEffect} from 'react';
import { getCurrentUser, signOutUser, getCurrentUserRole } from "../../services/firebase.js";
import { Link } from 'react-router-dom';
import Button from '../Button/Button.jsx';
import TitleSectionMain from "../TitleSectionMain/TitleSectionMain.jsx";
import "./UserInfo.css";

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
        <div className='divUserInfo'>
            {
                user ? 
                <div className='divIniciarSesionRegistrarse'>
                    <h2>Hola {user.email}</h2> 
                    {
                        role && 
                        <div className='divRol'>
                            <p>Tu rol es: {role}</p>
                            <Link to={"/add-product/"} className='linkButtonAdmin'> <Button color={"btn-dark allwidth"}>Agregar Producto</Button> </Link>
                            <Link to={"/edit-product/"} className='linkButtonAdmin'> <Button color={"btn-dark allwidth"}>Editar producto</Button> </Link>
                        </div>
                    }
                    <Button color={"btn-dark"} onFinish={handleSignOut} >Cerrar Sesión</Button>
                </div>
                :
                <div className='divIniciarSesionRegistrarse'>
                    <TitleSectionMain title={"Inicia sesión o regístrate"}/>
                    <div>
                        <div>              
                            <p>¿Tienes cuenta?</p>
                            <Link to="/user/login" className='linkButton'> <Button color={"btn-dark allwidth"}>Iniciar Sesión</Button> </Link>
                        </div>
                        <div>
                            <p>¿No tienes cuenta?</p>
                            <Link to="/user/register" className='linkButton'> <Button color={"btn-dark allwidth"}>Regístrate</Button> </Link>
                        </div>
                    </div>
                </div> 
            }
        </div>
    )
}

export default UserInfo;
