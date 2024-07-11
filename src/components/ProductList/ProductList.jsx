import React, { useEffect, useState } from 'react';
import "./ProductList.css"
import Product from '../Product/Product.jsx';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import ProductsCardsLoading from '../ProductsCardsLoading/ProductsCardsLoading.jsx';

const ProductList = ({search}) => {

    const { categoria } = useParams();
    const [productosFiltrados, setProductosFiltrados] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const location = useLocation();
    //const [productosBuscados, setProductosBuscados] = useState([]);

    useEffect(() => {

        const getProducts = async () => {
            try {
                let response = []
                if (location.pathname === "/"){
                    response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/?category=${categoria || "destacado"}`)
                } else {
                    response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/?category=${categoria || ""}`)
                }
                setProductosFiltrados(response.data.data)
                setAllProducts(response.data.data)
                setIsLoading(false)
                
            } catch (error) {
                console.log(error)
            }
        }
        getProducts()

    }, [categoria, location.pathname])


    const handleSearch = (e) => {
        e.preventDefault()
        if (e.target.value === "") {
            setProductosFiltrados(allProducts)
        } else {
            const filteredProducts = allProducts.filter(product => product.nombre.toLowerCase().includes(e.target.value.toLowerCase()))
            setProductosFiltrados(filteredProducts)
        }
    }

    return (
        <div className='divListProducts'>
            {
                search && 
                <p className='inputSearchContainer'>
                    <input 
                        className='inputSearch'
                        onChange={handleSearch}
                        type="text" 
                        name="text"
                        placeholder='Buscar producto...' 
                    />
                </p>
            }
            {
                isLoading ? <ProductsCardsLoading/> :
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
