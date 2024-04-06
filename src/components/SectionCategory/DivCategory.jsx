import React from 'react';
import "./SectionCategory.css"

const DivCategory = ({title, id}) => {
    return (
        <div className='divCategory' id={id}>
            <h3>{title}</h3>
        </div>
    );
}

export default DivCategory;
