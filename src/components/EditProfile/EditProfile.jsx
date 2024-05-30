import React, { useEffect, useState } from 'react';
import './EditProfile.css';
import { updateUser, getCurrentUserFirestore, getCurrentUser } from '../../services/firebase.js';
import Button from '../Button/Button.jsx';
import { toast, ToastContainer } from 'react-toastify';

const EditProfile = () => {

    const [user, setUser] = useState(null);
    const [dataUser, setDataUser] = useState({
        nombre: "",
        telefono: "",
        direccion: ""
    });
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [direccion, setDireccion] = useState("");
    const [dissabledButton, setDissabledButton] = useState(false);
    
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

    const notifySucces = () => toast.success("Perfil actualizada con exito.", {
        theme: "colored",
        pauseOnHover: false
    })

    const notifyError = () => toast.error("Error al actualizar el perfil.", {
        theme: "colored",
        pauseOnHover: false
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDissabledButton(true)
        try {
            const dataUpdate = {
                nombre: nombre || dataUser.nombre,
                telefono: telefono || dataUser.telefono,
                direccion: direccion || dataUser.direccion
            }
            console.log(user.uid)
            console.log(dataUpdate)
            await updateUser(user.uid, dataUpdate);
            notifySucces();
            setDissabledButton(false)
        } catch (error) {
            console.log(error);
            notifyError();
            setDissabledButton(false)
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
                            placeholder={user.displayName}
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
                    <Button color={"btn-dark"} onFinish={handleSubmit} enabledDisabled={dissabledButton}>{dissabledButton ? "Actualizando..." : "Actualizar perfil"}</Button>
                </form>
                :
                <div className='errorContainer'>
                    <h2>Usuario no encontrado, vuelve a iniciar sesión.</h2>
                </div>
            }
            <ToastContainer />
        </div>
    );
}

export default EditProfile;
