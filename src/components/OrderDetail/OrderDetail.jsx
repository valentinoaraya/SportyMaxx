import React from 'react';
import "./OrderDetail.css"

const OrderDetail = ({order}) => {

    return (
        <div className='divOrderDetail'>
            {
                order ?
                <>
                    <h1 className='titleOrder'>Orden de compra: {order.id}</h1>
                    <div className='divOrder'>
                        <h2>Detalles de la orden:</h2>
                        <p><span>Fecha:</span> {order.date}</p>
                        <p className='pProducts'><span>Productos:</span> </p>
                        <ul>
                            {
                                order.products.map((product) => {
                                    return <li className='liProducts' key={product.id}>
                                        <p>{product.nombre} x {product.count}</p>
                                        <p>Talle: {product.talle}</p>
                                    </li>
                                })
                            }
                        </ul>
                        <p><span>Método de pago:</span> {order.buyer.medioDePago}</p>
                        <p><span>Total:</span> ${order.total}</p>
                        <p><span>Estado del pago:</span> {order.buyer.estadoDePago}</p>
                    </div>
                </>
                :
                <div className='titleOrderCargando'>
                    <h1>Cargando...</h1>
                </div>
            }
        </div>
    );
}

export default OrderDetail;
