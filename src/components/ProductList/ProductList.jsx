import React, { useEffect, useState } from 'react';
import "./ProductList.css"
import Product from '../Product/Product.jsx';
import arrayProducts from '../../ddbb/database.js';
import { useParams } from 'react-router';

const ProductList = () => {

    const { categoria } = useParams();
    const [productosFiltrados, setProductosFiltrados] = useState(arrayProducts);
    
    useEffect(() => {
        setProductosFiltrados(arrayProducts.filter((e)=>e.categories.includes(categoria)))
        if (!categoria) setProductosFiltrados(arrayProducts.filter((e)=>e.categories.includes("destacado")))
    }, [categoria])


    return (
        <div className='divListProducts'>
            {
                productosFiltrados.length === 0 ? 
                <div className='titleNoProducts'>
                    <h1>No se encontraron productos.</h1> 
                </div>
                :
                productosFiltrados.map(({id, nombre, imagen, imagenSecundaria, precio})=>{
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
