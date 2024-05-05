import React from 'react';
import './ProductToEdit.css'

const ProductToEdit = ({product, categories}) => {
    
    return (
        <div className='divProductToEditContainer'>
            <div className='divInfoCurrentProduct'>
                <h2>Producto Actual</h2>
                <div className='divImgCurrentProductContainer'>
                    <div>
                        <h3>Imagen principal: </h3>
                        <img src={product.imagen} alt="Imagen principal" />
                    </div>
                    <div>
                        <h3>Imagen secundaria: </h3>
                        <img src={product.imagenSecundaria} alt="Imagen secundaria" />
                    </div>
                </div>
                <h3>Nombre: {product.nombre}</h3>
                <h3>Precio: ${product.precio}</h3>
                <h3>Disponibles: {product.stock}</h3>
                <h3>Categorias: </h3>
                <ul>
                    {
                        categories.map((cat)=>{
                            return <li key={cat}>{cat}</li>
                        })
                    }
                </ul>
                
            </div>
            <div className='formEdit'>

            </div>
        </div>
    );
}

export default ProductToEdit;
