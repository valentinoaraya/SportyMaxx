import React from 'react';
import "./SectionCategory.css"
import DivCategory from './DivCategory.jsx';

const SectionCategory = () => {

    return (
        <section className='sectionCategory'>
            <DivCategory title={"VCP"} id={"vcp"} />
            <DivCategory title={"ZAPATILLAS"} id={"zapas"}/>
            <DivCategory title={"BUZOS"} id={"buzos"}/>
        </section>
    );
}

export default SectionCategory;
