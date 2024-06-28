import React from 'react';
import "./MediosDePago.css"
import mercadoPagoLogo from "../../../assets/images/mercado-pago-logo-vector-2023.png";
import axios from 'axios';

const MediosDePago = ({user, dataCart}) => {

    const handleFinishBuy = async (e) => {
        e.preventDefault();

        try {
            const diaDeCompra = new Date();
            const dia = diaDeCompra.getDate();
            const mes = diaDeCompra.getMonth() + 1;
            const anio = diaDeCompra.getFullYear();
            const fecha = `${dia}/${mes}/${anio}`

            const simplifyProducts = dataCart.map((prod) => {
                return {
                    id: prod.id,
                    count: prod.count,
                    talle: prod.talleSeleccionado,
                    nombre: prod.nombre,
                    precio: prod.precio
                }
            })
    
            const dataBuyer = {
                nombre: user.nombre,
                email: user.email,
                telefono: user.telefono,
                direccion: user.direccion,
                id: user.idUser
            }

            const order = {
                buyer: dataBuyer,
                date: fecha,
                products: simplifyProducts,
                total: dataCart.reduce((acc, prod) => acc + prod.precio*prod.count, 0)
            }
            
            const resolve = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/orders/add-order`, order)
            
            if (resolve.status === 200){
                console.log("Orden subida correctamente")
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='divMediosDePagoContainer'>
            <div className='divInfoUser'>
                <h2>Datos del comprador:</h2>
                <p><span>Nombre:</span> {user.nombre}</p>
                <p><span>Correo:</span> {user.email}</p>
                <p><span>Teléfono:</span> {user.telefono} </p>
                <p><span>Dirección:</span> {user.direccion} </p>
            </div>
            <div className='divMediosDePago'>
                <h2>Medios de pago:</h2>
                
                    <div className='medioDePago'>
                        <div>
                            <span className='iconMDP iconEfectivo'>$</span>
                            <p>Efectivo (Retiro por el local)</p>
                        </div>
                        <p> {">"} </p>
                    </div>
                
                
                    <div className='medioDePago'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" fill="currentColor" className="bi iconMDP bi-bank" viewBox="0 0 16 16">
                                <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.5.5 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zM13 6v7h1V6zm2-1V4H1v1zm-.39 9H1.39l-.25 1h13.72z"/>
                            </svg>
                            <p>Transferencia bancaria</p>
                        </div>
                        <p> {">"} </p>
                    </div>
                
                
                    <div className='medioDePago MDPmercadoPago' onClick={handleFinishBuy}>
                        <div>
                            <img src={mercadoPagoLogo} alt="Logo MercadoPago" className='iconMDP iconMercadoPago'/>
                            <p>MercadoPago (Transferencia - Tarjetas)</p>
                        </div>
                        <p> {">"} </p>
                    </div>
                
            </div>
        </div>
    );
}

export default MediosDePago;
