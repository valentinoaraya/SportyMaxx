import React from 'react';
import "./BuyOrdersContainer.css"
import OrdersList from '../../components/OrdersList/OrdersList.jsx';

const BuyOrdersContainer = () => {
    return (
        <div className='buyOrdersContainer'>
            <h1>Órdenes de compra: </h1>
            <OrdersList></OrdersList>
        </div>
    );
}

export default BuyOrdersContainer;
