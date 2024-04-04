import React from 'react';
import "./Header.css"
import logo from "../../../assets/images/logo.png"
import CartWidget from '../../CartWidget/CartWidget.jsx';
import SearchBar from '../../SearchBar/SearchBar.jsx';

const Header = () => {
    return (
        <header>
            <nav>
                <div className='logoCategoriesContainer'>
                    <img className='logoHeader' src={logo} alt="Logo" />
                    <div className='categories'>
                        <p>Remeras</p>
                        <p>Pantalones</p>
                        <p>Zapatillas</p>
                        <p>Accesorios</p>
                    </div>
                </div>
                <div className='searchBarCartContainer'>
                    <SearchBar></SearchBar>
                    <CartWidget></CartWidget>
                </div>
            </nav>
        </header>
    );
}

export default Header;