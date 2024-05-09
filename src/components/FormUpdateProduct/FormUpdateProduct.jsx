import React, {useState} from 'react';
import './FormUpdateProduct.css'
import { getCurrentUserRole } from '../../services/firebase.js';
import Button from '../Button/Button.jsx';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const FormUpdateProduct = () => {

    const { id } = useParams();
    
    const [nombreProducto, setNombreProducto] = useState("")
    const [precio, setPrecio] = useState("")
    const [stock, setStock] = useState("")
    const [categories, setCategories] = useState([])
    const [imagen, setImagen] = useState(null)
    const [imagenSecundario, setImagenSecundaria] = useState(null)

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

        const userRole = await getCurrentUserRole()
        console.log(userRole)

        const formData = new FormData();
        if (nombreProducto) formData.append("nombre", nombreProducto);
        if (precio) formData.append("precio", precio);
        if (stock) formData.append("stock",stock);
        if (categories.length !== 0) formData.append("categories",categories);
        if (imagen) formData.append("imagen",imagen);
        if (imagenSecundario) formData.append("imagenSecundaria",imagenSecundario);
        formData.append("userRole", userRole)

        try {
            console.log("Enviando formulario...")
            console.log(formData)
            const resolve = await axios.put(`http://localhost:4000/edit-product/${id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })

            if (resolve.status === 200) {
                console.log("Formulario enviado con exito")
            } else {
                console.log("Error al enviar el formulario")
            }

        } catch (error) {
            console.log("Error al enviar el formulario ",error)
        }
    }

    const deleteProduct = async () => {

        const userRole = await getCurrentUserRole()
        console.log("Eliminando producto...")
        try {
            // Es importante quitar luego el req.body (o la información enviada) para el método delete, ya que está desaconsejado
            const response = await axios.post(`http://localhost:4000/delete-product/${id}`, {userRole})
            console.log(response)
            if (response.status === 200) {
                console.log("Producto eliminado con exito")
            } else { 
                console.log("Error al eliminar el producto")
            }
        } catch (error) {
            console.log(error)
        }
    }

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
                <label>
                    <span>Categorias:</span>
                    <input 
                        type="text" 
                        placeholder={categories} 
                        value={categories}
                        onChange={(e) => setCategories(e.target.value.split(", "))}
                    />
                </label>
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
                <Button color={"btn-dark"} type={"submit"} >Actualizar producto</Button>  
            </form>
            
            <Button color={"btn-dark"} onFinish={deleteProduct} >Eliminar producto</Button>
        </div>
    );
}

export default FormUpdateProduct;
