import React, { useState } from 'react';
import "./CheckoutUserForm.css"
import Button from "../../Button/Button.jsx";
import MediosDePago from '../MediosDePago/MediosDePago.jsx';

const CheckoutUserForm = () => {

    const [nombreUsuario, setNombreUsuario] = useState("");
    const [email, setEmail] = useState("");
    const [user, setUser]  = useState(null)

    const handleSumbit = (e) => {
        e.preventDefault();
        if (!nombreUsuario || !email) {
            return;
        }
        const newUser = {
            displayName: nombreUsuario,
            email
        }
        setUser(newUser)
    }

    return (

        <>
            {
                user ?
                <MediosDePago user={user}/>
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
                        <div className='divEmail'>
                            <label htmlFor="name"><span>Email: </span></label>
                            <input type="text" id="name" name="name" required
                                onChange={(e) => setEmail(e.target.value)}
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
