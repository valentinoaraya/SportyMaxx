import React from 'react';
import "./ProductList.css"
import Product from '../Product/Product.jsx';
import arrayProducts from '../../ddbb/database.js';

const ProductList = () => {
    return (
        <div className='divListProducts'>
            {
                arrayProducts.map(({id, nombre, imagen, imagenSecundaria, precio})=>{
                    return <Product
                        key={id}
                        id={id}
                        nombre={nombre}
                        imagen={imagen}
                        precio={precio}
                        imagenSecundaria={imagenSecundaria}
                    />
                })
            }
        </div>
    );
}

export default ProductList;
