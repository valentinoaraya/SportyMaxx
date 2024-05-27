import React, { useEffect, useState } from 'react';
import './EditProfile.css';
import { updateUser, getCurrentUserFirestore, getCurrentUser } from '../../services/firebase.js';
import Button from '../Button/Button.jsx';

const EditProfile = () => {

    const [user, setUser] = useState(null);
    const [dataUser, setDataUser] = useState({
        nombre: "",
        email: "",
        telefono: "",
        direccion: ""
    });
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [direccion, setDireccion] = useState("");

    useEffect(() => {
        const checkUser = async () => {
            try {
                const user = getCurrentUser();
                setUser(user);
                setDataUser(await getCurrentUserFirestore(user));
            } catch (error) {
                console.log(error);
            }
        }

        checkUser();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const dataUpdate = {
                nombre: nombre || dataUser.nombre,
                email: email || dataUser.email,
                telefono: telefono || dataUser.telefono,
                direccion: direccion || dataUser.direccion
            }
            console.log(user.uid)
            console.log(dataUpdate)
            await updateUser(user.uid, dataUpdate);
        } catch (error) {
            console.log(error);
            throw error
        }
    }

    return (
        <div className='divEditProfile'>
            {
                user ?                
                <form className='formEditProfile'>
                    <h2>Editar perfil</h2>
                    <label>
                        Nombre y apellido:
                        <input
                            type="text"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            placeholder={dataUser.nombre}
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={dataUser.email}
                        />
                    </label>
                    <label>
                        Teléfono:
                        <input
                            type="text"
                            value={telefono}
                            onChange={(e) => setTelefono(e.target.value)}
                            placeholder={dataUser.telefono}
                        />
                    </label>
                    <label>
                        Dirección:
                        <input
                            type="text"
                            value={direccion}
                            onChange={(e) => setDireccion(e.target.value)}
                            placeholder={dataUser.direccion}
                        />
                    </label>
                    <Button color={"btn-dark"} onFinish={handleSubmit} >Guardar cambios</Button>
                </form>
                :
                <div className='errorContainer'>
                    <h2>Usuario no encontrado, vuelve a iniciar sesión.</h2>
                </div>
            }
        </div>
    );
}

export default EditProfile;
