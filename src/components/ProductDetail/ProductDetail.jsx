import React, { useContext, useState, useEffect } from 'react';
import "./ProductDetail.css"
import Carousel from '../Carousel/Carousel.jsx';
import Button from '../Button/Button.jsx';
import { cartContext } from '../../context/CartContext.jsx';
import { ToastContainer, toast } from 'react-toastify';
import { getCurrentUserRole } from '../../services/firebase.js';
import { Link } from 'react-router-dom';

const ProductDetail = ({ product }) => {

    const { addToCart, cart } = useContext(cartContext)
    const [role, setRole] = useState(null)
    const [talleSelected, setTalleSelected] = useState(null)

    const mostrarTalles = () => {
        if (product.talles.length === 1 && product.talles[0] === "") {
            return false
        } else if (product.stock >= 1) {
            return true
        }
    }

    useEffect(() => {
        const checkUser = async () => {
            try {
                setRole(await getCurrentUserRole())
            } catch (error) {
                console.log(error)
            }
        }
        checkUser()
    }, [])

    const notify = () => toast.success("Agregado al carrito.", {
        theme: "colored",
        pauseOnHover: false
    })

    const count = cart.find(prod => prod.id === product.id)?.count || 0
    
    let enabledDisabled = false

    if (product.stock < 1 || count === product.stock || !product.stock) {
        enabledDisabled = true
    }

    const handleSelectTalle = (e) => {
        setTalleSelected(e.target.innerText)
    }

    if (mostrarTalles() && talleSelected === null) {
        enabledDisabled = true
    }

    const handleAddToCart = () => {
        const newProduct = {
            ...product,
            talleSeleccionado: talleSelected
        }
        addToCart(newProduct, 1)
        notify()
    }

    return (
        <section className='sectionProductDetail'>
            <div className='divImgProductDetail'>
                <Carousel imagen1={product.imagen.url} imagen2={product.imagenSecundaria.url} />
            </div>
            <div className='divProductDetail'>
                <h2>{product.nombre}</h2>
                <div className='infoProductDetail'>
                    <p>{product.cat}</p>
                    <p className='precioDetail'>$ {product.precio}</p>
                    {
                        product.stock >= 1 ?
                        <p>Disponibles: {product.stock}</p>
                        : 
                        <p>Sin stock</p>
                    }
                </div>
                {
                
                    mostrarTalles() &&
                    <div className='divSeleccionarTalle'>
                        <h3 className='seleccionarTalle'>Seleccionar talle</h3>
                        <div className='botonesSeleccionarTalle'>
                            {
                                product.talles.map((talle) => {

                                    if (talleSelected === talle) {
                                        return <div key={talle} onClick={handleSelectTalle}>
                                            <Button color={"btn-dark"}>{talle}</Button>
                                        </div>
                                    }

                                    return <div key={talle} onClick={handleSelectTalle}>
                                        <Button color={"btn-outline-dark"}>{talle}</Button>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                }
                <div className='divAgregarCarrito'>
                    <Button
                        onFinish={handleAddToCart}
                        color={"btn-dark allwidth"}
                        enabledDisabled={enabledDisabled}
                    >
                        Agregar al carrito
                    </Button>
                    {
                        role === "admin" &&
                        <Link className='linkEdit' to={`/edit-product/${product.id}`}>
                            <Button color={"btn-dark allwidth"}>Editar producto</Button>
                        </Link>
                    }
                </div>
            </div>
            <ToastContainer
                autoClose={2000}
            />
        </section>
    );
}

export default ProductDetail;
