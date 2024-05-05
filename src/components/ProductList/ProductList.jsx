import React, { useEffect, useState } from 'react';
import "./ProductList.css"
import Product from '../Product/Product.jsx';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const ProductList = () => {

    const { categoria } = useParams();
    const [productosFiltrados, setProductosFiltrados] = useState([]);
    const location = useLocation();
    
    useEffect(() => {

        const getProducts = async () => {
            try {

                let response = []

                if (location.pathname === "/"){
                    response = await axios.get(`http://localhost:4000/?category=${categoria || "destacado"}`)
                } else {
                    response = await axios.get(`http://localhost:4000/?category=${categoria || ""}`)
                }
                    
                setProductosFiltrados(response.data.data)
            } catch (error) {
                console.log(error)
            }
        }

        getProducts()

    }, [categoria, location.pathname])

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
