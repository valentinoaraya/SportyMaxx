import React from 'react';
import "./SectionCategory.css"
import DivCategory from './DivCategory.jsx';

const SectionCategory = () => {

    return (
        <section className='sectionCategory'>
            <DivCategory title={"VCP"} id={"vcp"} />
            <DivCategory title={"HARVEY WILLYS"} id={"zapas"}/>
            <DivCategory title={"VIEJASCUL"} id={"buzos"}/>
        </section>
    );
}

export default SectionCategory;
