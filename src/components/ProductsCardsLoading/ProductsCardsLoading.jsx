import React from 'react';
import './ProductsCardsLoading.css';
import CardLoading from './CardLoading/CardLoading.jsx';

const ProductsCardsLoading = () => {
    return (
        <div className='divProductsCardsLoading'>
            <CardLoading/>
            <CardLoading/>
            <CardLoading/>
            <CardLoading/>
        </div>
    );
}

export default ProductsCardsLoading;
