import { createContext, useState, useEffect } from 'react';

const cartContext = createContext([])
const Provider = cartContext.Provider

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const newCart = [...cart]

    const isLocalStorage = () => {
        let cartInStorage = JSON.parse(localStorage.getItem("Cart"))
        if (cartInStorage) setCart(cartInStorage)
    }

    const addToCart = (item, count) => {
        let indexProduct = cart.findIndex(product => product.id === item.id)
        if (indexProduct === -1){
            newCart.push({...item, count})
            setCart(newCart)
        } else {
            newCart[indexProduct].count += count
            setCart(newCart)
        }
        
        localStorage.setItem("Cart", JSON.stringify(newCart))
    }

    const totalProducts = () => {
        let total = cart.reduce((acc, product) => acc + product.count, 0)
        return total
    }

    const vaciarCarrito = () => {
        setCart([])
        console.log("el carrito fue vaciado")
        localStorage.removeItem("Cart")
    }

    const removeItem = (id) => {
        let persistentProducts = cart.filter(prods => prods.id !== id)
        setCart(persistentProducts)
        localStorage.setItem("Cart", JSON.stringify(persistentProducts))
    }

    const totalPrice = () => {
        let total = cart.reduce((acc, product) => acc + (product.precio*product.count),0)
        return total
    }

    useEffect(()=>{
        isLocalStorage()
    },[])

    return (
        <Provider
            value={{
                cart,
                cantidad: totalProducts,
                addToCart,
                vaciarCarrito,
                removeItem,
                totalPrice
            }}
        >
            {children}
        </Provider>
    );
}

export {cartContext, CartContextProvider};
