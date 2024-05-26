import React, { useEffect, useState } from 'react';
import "./ProductDetailContainer.css"
import ProductDetail from '../../components/ProductDetail/ProductDetail.jsx';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetailContainer = () => {

    const {id} = useParams()
    const [product, setProduct] = useState({
        imagen: {
            url: ""
        },
        imagenSecundaria: {
            url: ""
        },
    })
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/item/${id}`)
                setProduct(response.data.data)
                setIsLoading(false)
            } catch (error) {
                console.log(error)
            }
        }

        getProduct()
    }, [id]);

    return (
        <div className='divProductDetailContainer'>
            {
                isLoading ? 
                <div className='cargandoProductoContainer'>
                    <h1>Cargando producto...</h1>
                </div>
                : 
                <ProductDetail product={product} />
            }
        </div>
    );
}

export default ProductDetailContainer;
