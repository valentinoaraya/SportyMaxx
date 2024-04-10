import React, { useEffect, useState } from 'react';
import "./Header.css"
import logo from "../../../assets/images/logo.png"
import CartWidget from '../../CartWidget/CartWidget.jsx';
import SearchBar from '../../SearchBar/SearchBar.jsx';
import { Link } from 'react-router-dom';

const Header = () => {

    const [shadow, setShadow] = useState(false)

    useEffect(()=>{
        const handleScroll = () => {
            setShadow(window.scrollY > 50)
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)

    }, [])


    return (
        <header className={shadow ? 'headerShadow' : "border"}>
            <nav>
                <div className='logoCategoriesContainer'>
                    <Link to={"/"}>
                        <img className='logoHeader' src={logo} alt="Logo" />
                    </Link>
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