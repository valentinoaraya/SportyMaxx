import React, {useState, useEffect} from 'react';
import { getCurrentUser, signOutUser, getCurrentUserRole, getCurrentUserFirestore } from "../../services/firebase.js";
import { Link } from 'react-router-dom';
import Button from '../Button/Button.jsx';
import "./UserInfo.css";

const UserInfo = () => {

    const [user, setUser] = useState(null);
    const [role, setRole] = useState(null);
    const [dataUser, setDataUser] = useState({});
    
    useEffect(() => {
        const checkUser = async () => {
            try {
                const user = getCurrentUser();
                setUser(user);
                setRole(await getCurrentUserRole());
                setDataUser(await getCurrentUserFirestore(user));
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
                    <h2>¡Hola {user.displayName.split(" ")[0]}!</h2> 
                    {
                        role === "admin" && 
                        <div className='divRol'>
                            <p>Tienes el rol de administrador:</p>
                            <div className='divButtonsAdmin'>
                                <Link to={"/add-product/"} className='linkButtonAdmin'> <Button color={"btn-dark allwidth"}>Agregar Producto</Button> </Link>
                                <Link to={"/edit-product/"} className='linkButtonAdmin'> <Button color={"btn-dark allwidth"}>Editar producto</Button> </Link>
                            </div>
                        </div>
                    }
                    <section className='sectionDataUser'>
                        <div className='divData divDatosPersonales'>
                            <h3>Datos personales:</h3>
                            <p><span>Nombre:</span> {user.displayName}</p>
                            <p><span>Correo:</span> {user.email}</p>
                            <p><span>Teléfono:</span> {dataUser.telefono}</p>
                            <p><span>Dirección:</span> {dataUser.direccion}</p>
                        </div>
                        <div className='divData divMisCompras'>
                            <h3>Mis compras:</h3>
                            <p>No hay compras aún</p>
                        </div>
                    </section>
                    <div className='divButtons'>
                        <Link to={"/edit-profile/"}>
                            <Button color={"btn-dark"}>Editar perfil</Button>
                        </Link>
                        <Button color={"btn-dark"} onFinish={handleSignOut} >Cerrar Sesión</Button>
                    </div>
                </div>
                :
                <div className='divIniciarSesionRegistrarse divIniciarSesionRegistrarseNotAccount'>
                    <h2>Inicia Sesión o Regístrate</h2>
                    <div className='divButtons'>
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
