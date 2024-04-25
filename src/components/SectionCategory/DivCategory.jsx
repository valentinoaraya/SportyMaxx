import React from 'react';
import "./SectionCategory.css"
import { Link } from 'react-router-dom';

const DivCategory = ({ title, id }) => {
    const newTitle = title.toLowerCase().replace(' ', '-')
    return (
        <Link className='link-divCategory' to={`/category/${newTitle}`}>
            <div className='divCategory' id={id}>
                <h3>{title}</h3>
            </div>
        </Link>
    );
}

export default DivCategory;
