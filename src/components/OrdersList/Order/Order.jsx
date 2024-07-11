import React from 'react';
import "./Order.css"
import { Link } from 'react-router-dom';

const Order = ({buyer, date, id, total}) => {

    return (
        <Link className='linkOrder' to={`/order-detail/${id}`}>
            <div className='divOrderAdmin'>
                <h3>Orden: #{id}</h3>
                <p>{buyer.nombre}</p>
                <p>{date}</p>
                <p>${total}</p>
            </div>
        </Link>
    );
}

export default Order;
