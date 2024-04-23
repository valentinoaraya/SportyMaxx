import React from 'react';
// import { Link } from 'react-router-dom';
import "./CartWidget.css"
import CartView from '../CartView/CartView.jsx';

const CartWidget = () => {
    return (
        <div className='divCartWidget'>
            <div className='divSvgCart'>
                <CartView></CartView>
            </div>
        </div>
    );
}

export default CartWidget;
