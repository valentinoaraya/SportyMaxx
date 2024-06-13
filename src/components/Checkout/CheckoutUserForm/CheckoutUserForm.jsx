import React, { useState } from 'react';
import "./CheckoutUserForm.css"
import Button from "../../Button/Button.jsx";
import MediosDePago from '../MediosDePago/MediosDePago.jsx';

const CheckoutUserForm = ({dataCart}) => {

    const [nombreUsuario, setNombreUsuario] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("")
    const [direccion, setDireccion] = useState("")
    const [user, setUser]  = useState(null)

    const handleSumbit = (e) => {
        e.preventDefault();
        if (!nombreUsuario || !email || !telefono || !direccion) {
            return;
        }
        const newUser = {
            nombre: nombreUsuario,
            email,
            telefono,
            direccion
        }
        setUser(newUser)
    }

    return (

        <>
            {
                user ?
                <MediosDePago user={user} dataCart={dataCart}/>
                :
                <div className='checkoutUserFormContainer'>
                    <h2>Datos del comprador:</h2>
                    <form action="" className='checkoutUserForm'>
                        <div>
                            <label htmlFor="name"><span>Nombre y apellido: </span></label>
                            <input type="text" id="name" name="name" required
                                onChange={(e) => setNombreUsuario(e.target.value)}                        
                            />
                        </div>
                        <div>
                            <label htmlFor="name"><span>Email: </span></label>
                            <input type="text" id="name" name="name" required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="name"><span>Teléfono: </span></label>
                            <input type="text" id="name" name="name" required
                                onChange={(e) => setTelefono(e.target.value)}                        
                            />
                        </div>
                        <div>
                            <label htmlFor="name"><span>Dirección: </span></label>
                            <input type="text" id="name" name="name" required
                                onChange={(e) => setDireccion(e.target.value)}                        
                            />
                        </div>
                        <Button onFinish={handleSumbit} type={"submit"} color={"allwidth btn-dark"}>Continuar</Button>
                    </form>
                </div>   
            }
        </>
        
    );
}

export default CheckoutUserForm;
