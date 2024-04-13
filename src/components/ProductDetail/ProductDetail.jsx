import React, { useContext } from 'react';
import "./ProductDetail.css"
import Carousel from '../Carousel/Carousel.jsx';
import Button from '../Button/Button.jsx';
import { cartContext } from '../../context/CartContext.jsx';
import { ToastContainer, toast } from 'react-toastify';

const ProductDetail = ({ product }) => {

    const { addToCart, cart } = useContext(cartContext)

    const notify = () => toast.success("Agregado al carrito.", {
        theme: "colored",
        pauseOnHover: false
    })

    const count = cart.find(prod => prod.id === product.id)?.count || 0
    
    let enabledDisabled = false

    if (product.stock === 0 || count === product.stock) {
        enabledDisabled = true
    }

    return (
        <section className='sectionProductDetail'>
            <div className='divImgProductDetail'>
                <Carousel imagen1={product.imagen} imagen2={product.imagenSecundaria} />
            </div>
            <div className='divProductDetail'>
                <h2>{product.nombre}</h2>
                <div className='infoProductDetail'>
                    <p>{product.cat}</p>
                    <p className='precioDetail'>$ {product.precio}</p>
                    <p>Disponibles: {product.stock}</p>
                </div>
                <div className='divSeleccionarTalle'>
                    <h3 className='seleccionarTalle'>Seleccionar Talle</h3>
                    <div className='botonesSeleccionarTalle'>
                        <div>
                            <Button color={"btn-outline-dark"}>XXL</Button>
                        </div>
                        <div>
                            <Button color={"btn-outline-dark"}>XL</Button>
                        </div>
                        <div>
                            <Button color={"btn-outline-dark"}>L</Button>
                        </div>
                        <div>
                            <Button color={"btn-outline-dark"}>M</Button>
                        </div>
                        <div>
                            <Button color={"btn-outline-dark"}>S</Button>
                        </div>
                    </div>
                    <h4>Guía de talles</h4>
                </div>
                <div className='divAgregarCarrito' onClick={notify}>
                    <Button
                        onFinish={() => addToCart(product, 1)}
                        color={"btn-dark allwidth"}
                        enabledDisabled={enabledDisabled}
                    >
                        Agregar al carrito
                    </Button>
                </div>
            </div>
            <ToastContainer
                autoClose={2000}
            />
        </section>
    );
}

export default ProductDetail;
