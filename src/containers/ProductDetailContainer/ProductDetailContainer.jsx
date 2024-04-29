import React, { useEffect, useState } from 'react';
import "./ProductDetailContainer.css"
import ProductDetail from '../../components/ProductDetail/ProductDetail.jsx';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetailContainer = () => {

    const {id} = useParams()

    // const product = arrayProducts.find((e)=>{
    //     return e.id == id
    // })

    const [product, setProduct] = useState({})

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/item/${id}`)
                setProduct(response.data.data)
            } catch (error) {
                console.log(error)
            }
        }

        getProduct()
    }, [id]);


    return (
        <div className='divProductDetailContainer'>
            <ProductDetail product={product}></ProductDetail>
        </div>
    );
}

export default ProductDetailContainer;
