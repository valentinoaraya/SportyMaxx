import React from 'react';
import "./EditProductsContainer.css"
import ProductList from '../../components/ProductList/ProductList.jsx';
import TitleSectionMain from '../../components/TitleSectionMain/TitleSectionMain.jsx';

const EditProductsContainer = () => {

    return (
        <div className='editProductsContainer'>
            <TitleSectionMain title={"Selecciona el producto a editar: "}/>
            <ProductList search={true}/>
        </div>
    );
}

export default EditProductsContainer;
