import React from 'react';
import "./ProductListContainer.css"
import ProductList from '../../components/ProductList/ProductList.jsx';

const ProductListContainer = () => {
    return (
        <section className='mainContainer'>
            <ProductList/>
        </section>
    );
}

export default ProductListContainer;
