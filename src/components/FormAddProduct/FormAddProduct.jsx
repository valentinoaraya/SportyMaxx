import React, { useState } from 'react';
import "./FormAddProduct.css"
import axios from 'axios';
import Button from '../Button/Button.jsx';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const FormAddProduct = () => {

    const [nombreProducto, setNombreProducto] = useState("")
    const [precio, setPrecio] = useState("")
    const [stock, setStock] = useState("")
    const [categories, setCategories] = useState([])
    const [imagen, setImagen] = useState(null)
    const [imagenSecundario, setImagenSecundaria] = useState(null)
    const [disabledButton, setDisabledButton] = useState(false)

    const cats = ["DESTACADO", "REMERAS", "BUZOS", "CAMISAS", "PANTALONES", "BERMUDAS", "MALLAS", "ACCESORIOS", "VCP", "HARVEY WILLYS", "VIEJASCUL", "Manga corta", "Manga larga", "Chombas", "Con capucha", "Sin capucha", "Jeans", "Algodon", "Gabardina", "Boxers", "Billeteras", "Gorros", "Pilusos", "Gorras", "Australianos", "Medias",]

    // Obtengo el token de usuario
    const token = localStorage.getItem("token")

    const navigate = useNavigate("/")

    const notifySucces = () => toast.success("Producto cargado con exito.", {
        theme: "colored",
        pauseOnHover: false
    })

    const notifyError = () => toast.error("Error al cargar el producto.", {
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

    const handleSumit = async (e) => {
        e.preventDefault();
        setDisabledButton(true)

        const formData = new FormData();
        formData.append("nombre", nombreProducto);
        formData.append("precio", precio);
        formData.append("stock",stock);
        formData.append("categories",categories);
        formData.append("imagen",imagen);
        formData.append("imagenSecundaria",imagenSecundario);

        try {
            const resolve = await axios.post("http://localhost:4000/add-product", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`
                }
            })

            if (resolve.status === 200) {
                notifySucces()
                const idTimeout = setTimeout(() => {
                    navigate("/") 
                    clearTimeout(idTimeout)
                }, 1500)
            } else {
                notifyError()
            }

        } catch (error) {
            notifyError()
            console.log("Error al enviar el formulario ",error)
        }
        
        setDisabledButton(false)
    }


    return (
        <div className='divFormAddProduct'>
            <h1>Agregar un producto</h1>
            <form onSubmit={handleSumit} className='formAddProduct'>
                <label>
                    Nombre del producto:
                    <input 
                        type="text" 
                        value={nombreProducto}
                        onChange={(e) => setNombreProducto(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Precio del producto:
                    <input 
                        type='number' 
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Stock del producto:
                    <input 
                        type="number" 
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                        required
                    />
                </label>
                <div className='divCatsContainer'>
                    <label>
                        Categorías del producto:
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
                    Imagen principal del producto:
                    <input 
                        type="file" 
                        onChange={handleImagenChange}
                        required
                    />
                </label>
                <label>
                    Imagen secundaria del producto:
                    <input 
                        type="file" 
                        onChange={handleImagenSecundariaChange}
                        required
                    />
                </label>
                <Button color={"btn-dark"} type={"submit"} enabledDisabled={disabledButton}>{disabledButton ? "Cargando producto..." : "Cargar producto"}</Button>  
            </form>
            <ToastContainer
                autoClose = {false}
            />
        </div>
    );
}

export default FormAddProduct;
