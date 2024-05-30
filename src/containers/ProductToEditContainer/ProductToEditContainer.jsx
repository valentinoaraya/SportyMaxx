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
