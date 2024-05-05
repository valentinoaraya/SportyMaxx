import React, {useEffect, useState} from 'react';
import "./ProductToEditContainer.css"
import { useParams } from 'react-router-dom';
import ProductToEdit from '../../components/ProductToEdit/ProductToEdit.jsx';
import axios from 'axios';

const ProductToEditContainer = () => {

    const {id} = useParams()
    const [product, setProduct] = useState({})
    // Hago un useState aparta para las categorías porque React me tira un error
    // cuando utilizo el array de categories desde el producto, por lo tanto lo paso aparte
    const [productCategories, setProductCategories ] = useState([])

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/item/${id}`)
                setProduct(response.data.data)
                setProductCategories(response.data.data.categories)
            } catch (error) {
                console.log(error)
            }
        }

        getProduct()

    },[id])

    return (
        <div className='productToEditContainer'>
            <ProductToEdit product={product} categories={productCategories}/>
        </div>
    );
}

export default ProductToEditContainer;
