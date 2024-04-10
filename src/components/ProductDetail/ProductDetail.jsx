import React from 'react';
import "./ProductDetail.css"
import Carousel from '../Carousel/Carousel.jsx';
import Button from '../Button/Button.jsx';

const ProductDetail = ({ product }) => {
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
                <div className='divAgregarCarrito'>
                    <Button color={"btn-dark allwidth"}>Agregar al carrito</Button>
                </div>
            </div>
        </section>
    );
}

export default ProductDetail;
