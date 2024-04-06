import React from 'react';
import "./Product.css";

const Product = ({ nombre, imagen, precio }) => {

    return (
        <div className="card divProduct" style={{width: 18 + "rem"}}>
            <img src={imagen} className="card-img-top imgProduct" alt="Imagen Producto"/>
            <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p>$ {precio}</p>
            </div>
        </div>
    );
}

export default Product;
