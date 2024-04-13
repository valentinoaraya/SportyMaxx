import React, { useContext } from 'react';
import "./CartView.css"
import { cartContext } from '../../context/CartContext.jsx';
import ProductInCart from './ProductInCart/ProductInCart.jsx';
import Button from '../Button/Button.jsx';

const CartView = () => {

    const { cart, totalPrice, vaciarCarrito, totalProducts } = useContext(cartContext)
    const totalPriceCart = totalPrice()
    const totalProductsCart = totalProducts()

    return (
        <div>
            <div className='widget-totalProducts-container'>
                <button className="navbar-toggler boton" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-bag-fill" viewBox="0 0 16 16">
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z" />
                    </svg>
                </button>
                <div className='totalProducts-container'>
                    <p>{totalProductsCart}</p>
                </div>
            </div>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className='bolsaComprasTitle'>Tu carrito de compras:</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    {
                        cart.length === 0 &&
                        <div className='divNoProducts'>
                            <p>¡Agrega productos a tu carrito!</p>
                        </div>
                    }
                    <ul className="navbar-nav justify-content-end flex-grow-1">
                        {
                            cart.map((prod)=>{
                                return <li key={prod.id}>
                                    <ProductInCart product={prod}></ProductInCart>
                                </li>
                            })
                        }
                    </ul>
                    <div className='divFinishCart'>
                        {
                            totalPriceCart !== 0 &&
                                <div className='divTotalPrice'>
                                    <p>Total de la bolsa: $ {totalPriceCart}</p>
                                </div>
                        }
                        <div className='botonCart boton1'>
                            <Button color={"btn-outline-dark allwidth"} onFinish={vaciarCarrito} 
                                enabledDisabled={cart.length === 0 ? true : false}
                            >
                                Vaciar carrito
                            </Button>
                        </div>
                        <div className='botonCart boton2'>
                            <Button color={"btn-dark allwidth"}
                                enabledDisabled={cart.length === 0 ? true : false}
                            >
                                Finalizar compra
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartView;
