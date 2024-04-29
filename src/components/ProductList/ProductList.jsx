import React, { useEffect, useState } from 'react';
import "./ProductList.css"
import Product from '../Product/Product.jsx';
import arrayProducts from '../../ddbb/database.js';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductList = () => {

    const { categoria } = useParams();
    const [productosFiltrados, setProductosFiltrados] = useState([]);
    
    useEffect(() => {
        //setProductosFiltrados(arrayProducts.filter((e)=>e.categories.includes(categoria)))
        //if (!categoria) setProductosFiltrados(arrayProducts.filter((e)=>e.categories.includes("destacado")))

        const getProducts = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/?category=${categoria || ""}`)
                setProductosFiltrados(response.data.data)
            } catch (error) {
                console.log(error)
            }
        }

        getProducts()

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
