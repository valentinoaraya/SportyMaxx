import React from 'react';
import "./SectionCategory.css"
import { Link } from 'react-router-dom';

const DivCategory = ({ title, id }) => {
    return (
        <Link className='link-divCategory' to={`/`}>
            <div className='divCategory' id={id}>
                <h3>{title}</h3>
            </div>
        </Link>
    );
}

export default DivCategory;
