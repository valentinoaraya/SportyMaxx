import React from 'react';
import "./ButtonCategoriesMobile.css"
import Accordion from './Accordion.jsx';

const ButtonCategoriesMobile = ({data}) => {

    return (
        <div>
            <div className='widget-totalProducts-container'>
                <button className="navbar-toggler boton" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarMobile" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
                </button>
            </div>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbarMobile" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header offcanvas-header-mobile">
                    <h5 className='bolsaComprasTitle'>Categorías:</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <Accordion data={data}/>
                </div>
            </div>
        </div>
    );
}

export default ButtonCategoriesMobile;

