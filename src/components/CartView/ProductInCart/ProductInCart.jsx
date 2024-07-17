import React, { useContext } from 'react';
import "./ProductInCart.css"
import { Link } from 'react-router-dom';
import { cartContext } from '../../../context/CartContext.jsx';
import IncDec from './IncDec/IncDec.jsx';

const ProductInCart = ({ product }) => {

    const {removeItem} = useContext(cartContext)

    return (
        <div className='cardProductInCart'>
            <div className='divProductInCartIMG'>
                <Link to={`/item/${product.id}`}>
                    <img src={product.imagen.url} alt="Imagen producto" data-bs-dismiss="offcanvas" />
                </Link>
            </div>
            <div className='divProductInCartInfo'>
                <div className='productInfo'>
                    <h3>{product.nombre}</h3>
                    {
                        product.talleSeleccionado && <p>Talle: {product.talleSeleccionado}</p>
                    }
                    <p>Cantidad: {product.count}</p>
                    <p>$ {product.precio}</p>
                    <IncDec product={product} />
                </div>
                <div className='deleteProduct'>
                    <div onClick={()=> removeItem(product.id+product.talleSeleccionado)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductInCart;
