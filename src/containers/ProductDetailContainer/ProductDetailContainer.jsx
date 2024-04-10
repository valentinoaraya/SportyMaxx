import React from 'react';
import "./ProductDetailContainer.css"
import ProductDetail from '../../components/ProductDetail/ProductDetail.jsx';
import { useParams } from 'react-router';
import arrayProducts from '../../ddbb/database.js';

const ProductDetailContainer = () => {

    const {id} = useParams()

    const product = arrayProducts.find((e)=>{
        return e.id == id
    })

    return (
        <div className='divProductDetailContainer'>
            <ProductDetail product={product}></ProductDetail>
        </div>
    );
}

export default ProductDetailContainer;
