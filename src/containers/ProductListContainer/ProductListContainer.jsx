import React, { useState, useEffect } from 'react';
import "./ProductListContainer.css"
import ProductList from '../../components/ProductList/ProductList.jsx';
import Banner from '../../components/Banner/Banner.jsx';
import TitleSectionMain from '../../components/TitleSectionMain/TitleSectionMain.jsx';
import SectionCategory from '../../components/SectionCategory/SectionCategory.jsx';
import { useParams } from 'react-router';

const ProductListContainer = () => {

    const {categoria} = useParams()
    const [title, setTitle] = useState("Productos destacados")

    useEffect(() => {
        if (categoria) {
            setTitle(`${categoria.replace("-", " ").charAt(0).toUpperCase() + categoria.replace("-", " ").slice(1)}`)
        } else {
            setTitle("Productos destacados")
        }
    }, [categoria])

    return (
        <section className='mainContainer'>
            <Banner/>
            <TitleSectionMain title={title}></TitleSectionMain>
            <ProductList/>
            <TitleSectionMain title={"Secciones destacadas"}></TitleSectionMain>
            <SectionCategory/>
        </section>
    );
}

export default ProductListContainer;
