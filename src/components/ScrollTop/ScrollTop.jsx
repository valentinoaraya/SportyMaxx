import React, { useEffect } from 'react';
import { useLocation } from 'react-router';

const ScrollTop = () => {

    const {pathname} = useLocation()
    console.log(pathname)

    useEffect(()=>{
        const timeout = setTimeout(()=>{
            window.scrollTo(0,0);
        }, 0) 

        return () => clearTimeout(timeout)

    }, [pathname])

    return null
}

export default ScrollTop;
