import React from 'react';
import "../Header.css"
import "./SubCategories.css"
import { Link } from 'react-router-dom';

const SubCategories = ({data}) => {

    return (
        <div className='divSubCategory'>
            <p className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {data.mainCategory}
            </p>
            <ul className="dropdown-menu">
                {
                    data.subCategories.map((e)=>{
                        return <li key={e}><Link to={`/category/:${e.toLowerCase()}`} className="dropdown-item">{e}</Link></li>
                    })
                }
                <li><hr className="dropdown-divider" /></li>
                <li><Link to={`/category/:${data.mainCategory.toLowerCase()}`} className="dropdown-item">Ver Todo</Link></li>
            </ul>
        </div>
    );
}

export default SubCategories;
