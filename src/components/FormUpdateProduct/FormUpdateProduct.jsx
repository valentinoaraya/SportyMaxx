import React, { useState } from 'react';
import './FormUpdateProduct.css'
import Button from '../Button/Button.jsx';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const FormUpdateProduct = () => {

    const { id } = useParams();

    const token = localStorage.getItem("token")

    const navigate = useNavigate("/")

    const [nombreProducto, setNombreProducto] = useState("")
    const [precio, setPrecio] = useState("")
    const [stock, setStock] = useState("")
    const [categories, setCategories] = useState([])
    const [arrayTalles, setArrayTalles] = useState([])
    const [imagen, setImagen] = useState(null)
    const [imagenSecundario, setImagenSecundaria] = useState(null)
    const [disabledButton, setDisabledButton] = useState(false)

    const cats = ["DESTACADO", "REMERAS", "BUZOS", "CAMISAS", "PANTALONES", "BERMUDAS", "MALLAS", "ACCESORIOS", "VCP", "HARVEY WILLYS", "VIEJASCUL", "Manga corta", "Manga larga", "Chombas", "Con capucha", "Sin capucha", "Jeans", "Algodon", "Gabardina", "Boxers", "Billeteras", "Gorros", "Pilusos", "Gorras", "Australianos", "Medias",]
    const talles = ["XS", "S", "M", "L", "XL", "XXL"]


    const notifySucces = (action) => toast.success(action === "delete-product" ? "Producto eliminado con exito." : "Producto actualizado con exito.", {
        theme: "colored",
        pauseOnHover: false
    })

    const notifyError = (action) => toast.error(action === "delete-product" ? "Error al eliminar el producto." : "Error al actualizar el producto.", {
        theme: "colored",
        pauseOnHover: false
    })
    
    const handleImagenChange = (e) => {
        const file = e.target.files[0];
        setImagen(file);
    }

    const handleImagenSecundariaChange = (e) => {
        const file = e.target.files[0];
        setImagenSecundaria(file);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabledButton(true)
        const action = "update-product"

        const formData = new FormData();
        if (nombreProducto) formData.append("nombre", nombreProducto);
        if (precio) formData.append("precio", precio);
        if (stock) formData.append("stock", stock);
        if (categories.length !== 0) formData.append("categories", categories);
        if (imagen) formData.append("imagen", imagen);
        if (imagenSecundario) formData.append("imagenSecundaria", imagenSecundario);
        if (arrayTalles.length !== 0) formData.append("talles", arrayTalles);

        if (!nombreProducto && !imagen && !imagenSecundario && categories.length === 0 && arrayTalles.length === 0 && !stock && !precio) {
            console.log("No hay nada que actualizar")
        } else {
            try {
                console.log("Enviando formulario...")
                console.log(formData)
                const resolve = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/edit-product/${id}`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${token}`
                    }
                })

                if (resolve.status === 200) {
                    notifySucces(action)
                    const idTimeout = setTimeout(() => {
                        navigate("/")
                        clearTimeout(idTimeout)
                    }, 1500)
                } else {
                    notifyError(action)
                }

            } catch (error) {
                notifyError(action)
            }
        }
        setDisabledButton(false)
    }

    const deleteProduct = async () => {

        setDisabledButton(true)

        const action = "delete-product"

        console.log("Eliminando producto...")
        try {
            const response = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/delete-product/${id}`, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(response)
            if (response.status === 200) {
                notifySucces(action)
                const idTimeout = setTimeout(() => {
                    navigate("/")
                    clearTimeout(idTimeout)
                }, 1500)
            } else {
                notifyError(action)
            }
        } catch (error) {
            notifyError(action)
        }

        setDisabledButton(false)
    }

    console.log(arrayTalles)

    return (
        <div className='divFormUpdateProduct'>
            <form onSubmit={handleSubmit} className='formUpdateProduct'>
                <label>
                    <span>Nombre:</span>
                    <input
                        type="text"
                        placeholder={"Nuevo nombre del producto..."}
                        value={nombreProducto}
                        onChange={(e) => setNombreProducto(e.target.value)}
                    />
                </label>
                <label>
                    <span>Precio:</span>
                    <input
                        type="number"
                        placeholder={"Nuevo precio..."}
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                    />
                </label>
                <label>
                    <span>Stock:</span>
                    <input
                        type="number"
                        placeholder={stock}
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                    />
                </label>
                <div>
                    <label>
                        <span>Categorías: </span>
                    </label>
                    <div>
                        {
                            cats.map((cat, index) => (
                                <div key={index} className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value={cat}
                                        name={cat}
                                        checked={categories.includes(cat.toLowerCase().replace(/\s/g, "-"))}
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                setCategories([...categories, e.target.value.toLowerCase().replace(/\s/g, "-")])
                                            } else {
                                                setCategories(categories.filter(c => c !== e.target.value.toLowerCase().replace(/\s/g, "-")))
                                            }
                                        }}
                                    />
                                    <label className="form-check-label" htmlFor={cat}>{index <= 7 ? <span>{cat}</span> : cat}</label>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <label>
                    <span>Imagen principal:</span>
                    <input
                        type="file"
                        onChange={handleImagenChange}
                    />
                </label>
                <label>
                    <span>Imagen secundaria:</span>
                    <input
                        type="file"
                        onChange={handleImagenSecundariaChange}
                    />
                </label>
                <div>
                    <label>
                        <span>Talles:</span>
                    </label>
                    <div>
                        {
                            talles.map((talle, index) => (
                                <div key={index} className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value={talle}
                                        name={talle}
                                        checked={arrayTalles.includes(talle)}
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                setArrayTalles([...arrayTalles, e.target.value])
                                            } else {
                                                setArrayTalles(arrayTalles.filter(t => t !== e.target.value))
                                            }
                                        }}
                                    />
                                    <label className="form-check-label" htmlFor={talle}><span>{talle}</span></label>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <Button color={"btn-dark"} type={"submit"} enabledDisabled={disabledButton}>Actualizar producto</Button>
            </form>

            <Button color={"btn-dark allwidth"} onFinish={deleteProduct} enabledDisabled={disabledButton}>Eliminar producto</Button>
            <ToastContainer
                autoClose={false}
            />
        </div>
    );
}

export default FormUpdateProduct;
