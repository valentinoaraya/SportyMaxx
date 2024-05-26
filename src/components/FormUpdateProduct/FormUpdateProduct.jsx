import React, { useState } from 'react';
import './FormUpdateProduct.css'
import Button from '../Button/Button.jsx';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const FormUpdateProduct = () => {

    const { id } = useParams();

    const token = localStorage.getItem("token")

    const [nombreProducto, setNombreProducto] = useState("")
    const [precio, setPrecio] = useState("")
    const [stock, setStock] = useState("")
    const [categories, setCategories] = useState([])
    const [imagen, setImagen] = useState(null)
    const [imagenSecundario, setImagenSecundaria] = useState(null)
    const [disabledButton, setDisabledButton] = useState(false)

    const cats = ["DESTACADO", "REMERAS", "BUZOS", "CAMISAS", "PANTALONES", "BERMUDAS", "MALLAS", "ACCESORIOS", "VCP", "HARVEY WILLYS", "VIEJASCUL", "Manga corta", "Manga larga", "Chombas", "Con capucha", "Sin capucha", "Jeans", "Algodon", "Gabardina", "Boxers", "Billeteras", "Gorros", "Pilusos", "Gorras", "Australianos", "Medias",]

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

        if (!nombreProducto && !imagen && !imagenSecundario && categories.length === 0 && !stock && !precio) {
            console.log("No hay nada que actualizar")
        } else {
            try {
                console.log("Enviando formulario...")
                console.log(formData)
                const resolve = await axios.put(`http://localhost:4000/edit-product/${id}`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${token}`
                    }
                })

                if (resolve.status === 200) {
                    notifySucces(action)
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
            const response = await axios.delete(`http://localhost:4000/delete-product/${id}`, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(response)
            if (response.status === 200) {
                notifySucces(action)
            } else {
                notifyError(action)
            }
        } catch (error) {
            notifyError(action)
        }

        setDisabledButton(false)
    }

    const notifySucces = (action) => toast.success(action === "delete-product" ? "Producto eliminado con exito." : "Producto actualizado con exito.", {
        theme: "colored",
        pauseOnHover: false
    })

    const notifyError = (action) => toast.error(action === "delete-product" ? "Error al eliminar el producto." : "Error al actualizar el producto.", {
        theme: "colored",
        pauseOnHover: false
    })

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
