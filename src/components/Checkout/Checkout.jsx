import React, {useContext, useEffect, useState} from 'react';
import './Checkout.css'
import { cartContext } from '../../context/CartContext.jsx';
import { getCurrentUser } from '../../services/firebase.js';
import CheckoutUserForm from './CheckoutUserForm/CheckoutUserForm.jsx';
import MediosDePago from './MediosDePago/MediosDePago.jsx';

const Checkout = () => {

    // Debo verificar si hay un usuario, caso contrario pedir informaciónd
    const [user, setUser] = useState(null)
    const { cart, totalPrice } = useContext(cartContext);

    useEffect(()=>{
        const checkUser = async () => {
            try {
                const user = getCurrentUser();
                setUser(user);
            } catch (error) {
                console.log(error);
            }
        }
        checkUser()
    }, [])

    return (
        <div className='divCheckout'>
            {
                user ?
                <MediosDePago user={user}/>
                :
                <CheckoutUserForm/>
            }           
            <div className='dataCartContainer'>
                <div>
                    <ul>
                        {
                            cart.map((prod)=>{
                                return <li key={prod.id}>
                                    <div className='divInfoProduct'>
                                        <div>
                                            <img src={prod.imagen.url} alt="Imagen producto" className='imgCheckoutData' />
                                            <p><span className='resaltName'>{prod.nombre}</span> x{prod.count}</p>
                                        </div>
                                        <p>${prod.precio*prod.count}</p>
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                </div>
                <div className='divTotalPrice'>
                    <p className='titleTotal'>TOTAL:</p>
                    <p>${totalPrice()}</p>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
