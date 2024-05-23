import React, { useContext } from 'react';
import "./CartView.css"
import { cartContext } from '../../context/CartContext.jsx';
import ProductInCart from './ProductInCart/ProductInCart.jsx';
import Button from '../Button/Button.jsx';
import { Link } from 'react-router-dom';

const CartView = () => {

    const { cart, totalPrice, vaciarCarrito, totalProducts } = useContext(cartContext)
    const totalPriceCart = totalPrice()
    const totalProductsCart = totalProducts()

    return (
        <div>
            <div className='widget-totalProducts-container'>
                <button className="navbar-toggler boton" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-mobile bi-cart" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
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
                                    <p>Total del carrito: $ {totalPriceCart}</p>
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
                            
                            {
                                cart.length !== 0 ?
                                <Link to="/checkout">
                                    <div data-bs-dismiss="offcanvas" >
                                        <Button 
                                            color={"btn-dark allwidth"}
                                            enabledDisabled={cart.length === 0 ? true : false}
                                        >
                                            Finalizar compra
                                        </Button>
                                    </div>
                                </Link>
                                :
                                <Button 
                                    color={"btn-dark allwidth"}
                                    enabledDisabled={cart.length === 0 ? true : false}
                                >
                                    Finalizar compra
                                </Button>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartView;
