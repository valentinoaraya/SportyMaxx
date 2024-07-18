import React from 'react';
import "./FinishBuy.css"
import { useParams } from 'react-router-dom';

const FinishBuy = () => {

    const {medioDePago} = useParams()    
    
    return (
        <div className='divFinishBuy'>

                {
                    medioDePago === "transferencia" ?
                    <div className='medioDePagoTransferencia'>
                        <h1 className='titleMain'>✅ Pedido realizado con éxito (Transferencia bancaria).</h1>
                        <h3>⏳ En espera de pago...</h3>
                        <p>¡Hola! Podés realizar la transferencia a la siguiente cuenta:</p>
                        <ul>
                            <li>CBU: 0110266830026615937897</li>
                            <li>ALIAS: matii.villegas</li>
                            <li>TITULAR DE LA CUENTA: Vito Matías Villegas Nidoriz </li>
                            <li>DNI: 45968255</li>
                        </ul>
                        <p className='finalP'>IMPORTANTE: </p>
                        <p>Para confirmar el pago y concretar el envío, debes ENVIAR el COMPROBANTE de transferencia al siguiente número:</p>
                        <p>🟢 Whatsapp: +54 2625648229</p>
                        <p>Nos pondremos de acuerdo para realizar el envío por ese mismo medio.</p>
                        <p className='finalP'>¡Muchas gracias por confiar!</p>
                    </div>
                    :
                    <div className='medioDePagoEfectivo'>
                        <h1 className='titleMain'>✅ Pedido realizado con éxito (Efectivo).</h1>
                        <h3>⏳ En espera de pago...</h3>
                        <p>¡Hola! Ya reservamos tu pedido.</p>
                        <p>Podés pasar a abonar y retirar tu compra por la siguiente dirección:</p>
                        <p>📍 Avenida Alvear Este 74. General Alvear, Mendoza</p>
                        <p className='finalP'>¡Muchas gracias por confiar!</p>
                    </div>
                }
            
        </div>
    );
}

export default FinishBuy;
