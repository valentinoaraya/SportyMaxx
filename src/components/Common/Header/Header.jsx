import React, { useEffect, useState } from 'react';
import "./Header.css"
import CartWidget from '../../CartWidget/CartWidget.jsx';
import SubCategories from './SubCategories/SubCategories.jsx';
import { Link } from 'react-router-dom';
import categories from './dataCategories.js';


const Header = () => {

    const [shadow, setShadow] = useState(false)

    useEffect(() => {
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
                    <Link className='linkLogo' to={"/"}>
                        <h1 className='logoHeader'>SPORTYMAXX</h1>
                    </Link>
                </div>
                <div className='categories'>
                    {
                        categories.map((c)=>{
                            return <SubCategories key={c.mainCategory} data={c}/>
                        })
                    }
                </div>
                <div className='searchBarCartContainer'>
                    <CartWidget></CartWidget>
                </div>
            </nav>
        </header>
    );
}

export default Header;