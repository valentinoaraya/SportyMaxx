import React, {useEffect, useState} from 'react';
import "./ProductToEditContainer.css"
import { useParams } from 'react-router-dom';
import ProductToEdit from '../../components/ProductToEdit/ProductToEdit.jsx';
import axios from 'axios';

const ProductToEditContainer = () => {

    const {id} = useParams()

    const [product, setProduct] = useState({
        imagen: {
            url: ""
        },
        imagenSecundaria: {
            url: ""
        }
    })
    const [productCategories, setProductCategories ] = useState([])
    const [productTalles, setProductTalles] = useState([])

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/item/${id}`)
                setProduct(response.data.data)
                setProductCategories(response.data.data.categories)
                setProductTalles(response.data.data.talles)
            } catch (error) {
                console.log(error)
            }
        }

        getProduct()

    },[id])

    return (
        <div className='productToEditContainer'>
            <ProductToEdit product={product} categories={productCategories} talles={productTalles}/>
        </div>
    );
}

export default ProductToEditContainer;
