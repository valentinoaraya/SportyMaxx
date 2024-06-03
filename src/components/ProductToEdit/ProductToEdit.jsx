import React from 'react';
import './ProductToEdit.css'
import FormUpdateProduct from '../FormUpdateProduct/FormUpdateProduct.jsx';

const ProductToEdit = ({product, categories, talles}) => {
    
    return (
        <div className='divProductToEditContainer'>
            <div className='divInfoCurrentProduct'>
                <h2>Producto actual:</h2>
                <div className='divImgCurrentProductContainer'>
                    <div>
                        <p>Imagen principal: </p>
                        <img src={product.imagen.url} alt="Imagen principal" />
                    </div>
                    <div>
                        <p>Imagen secundaria: </p>
                        <img src={product.imagenSecundaria.url} alt="Imagen secundaria" />
                    </div>
                </div>
                <div>
                    <p><span>Nombre:</span> {product.nombre}</p>
                    <p><span>Precio:</span> ${product.precio}</p>
                    <p><span>Stock:</span> {product.stock}</p>
                </div>
                <p><span>Categorias:</span> </p>
                <ul>
                    {
                        categories.map((cat)=>{
                            return <li className='liCategories' key={cat}>{cat.toUpperCase().replace('-', ' ')}</li>
                        })
                    }
                </ul>
                <p><span>Talles:</span> </p>
                <ul>
                    {
                        talles.map((talle)=>{
                            return <li className='liCategories' key={talle}>{talle.toUpperCase()}</li>
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
