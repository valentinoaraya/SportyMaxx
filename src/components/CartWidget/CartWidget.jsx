import React from 'react';
// import { Link } from 'react-router-dom';
import "./CartWidget.css"
import CartView from '../CartView/CartView.jsx';

const CartWidget = () => {
    return (
        <div className='divCartWidget'>
            <div className='divSvgUser'>
                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
            </div>
            <div className='divSvgCart'>
                <CartView></CartView>
            </div>
        </div>
    );
}

export default CartWidget;
