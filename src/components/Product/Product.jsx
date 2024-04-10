import React from 'react';
import "./Product.css";
import { Link } from 'react-router-dom';

const Product = ({ nombre, imagen, imagenSecundaria, precio, id }) => {
    
    return (
        <Link className='link' to={`/item/${id}`}>
            <div className="card divProduct" style={{ width: 18 + "rem" }}>
                <img src={imagen} className="card-img-top imgProduct defaultImage" alt="Imagen Producto" />
                <img src={imagenSecundaria} className="card-img-top imgProduct hoverImage" alt="Imagen Producto" />
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p>$ {precio}</p>
                </div>
            </div>
        </Link>
    );
}

export default Product;
