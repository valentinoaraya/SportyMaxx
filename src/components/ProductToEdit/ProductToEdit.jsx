import React from 'react';
import './ProductToEdit.css'
import FormUpdateProduct from '../FormUpdateProduct/FormUpdateProduct.jsx';

const ProductToEdit = ({product, categories}) => {
    
    return (
        <div className='divProductToEditContainer'>
            <div className='divInfoCurrentProduct'>
                <h2>Producto actual:</h2>
                <div className='divImgCurrentProductContainer'>
                    <div>
                        <p>Imagen principal: </p>
                        <img src={product.imagen} alt="Imagen principal" />
                    </div>
                    <div>
                        <p>Imagen secundaria: </p>
                        <img src={product.imagenSecundaria} alt="Imagen secundaria" />
                    </div>
                </div>
                <p><span>Nombre:</span> {product.nombre}</p>
                <p><span>Precio:</span> ${product.precio}</p>
                <p><span>Stock:</span> {product.stock}</p>
                <p><span>Categorias:</span> </p>
                <ul>
                    {
                        categories.map((cat)=>{
                            return <li key={cat}>{cat}</li>
                        })
                    }
                </ul>
                
            </div>
            <div className='formEdit'>
                <h2>Actualizar producto:</h2>
                <FormUpdateProduct/>
            </div>
        </div>
    );
}

export default ProductToEdit;
