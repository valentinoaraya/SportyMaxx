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

    const addToCart = (item) => {
        if (item.talleSeleccionado) {
            const indexProduct = cart.findIndex((product) => {
                if (product.id === item.id && product.talleSeleccionado === item.talleSeleccionado){
                    return product
                }
                return null
            })
            if (indexProduct === -1){
                item.count = 1
                newCart.push(item)
                setCart(newCart)
            } else {
                newCart[indexProduct].count += 1
                setCart(newCart)
            }
        } else {
            const indexProduct = cart.findIndex(product => product.id === item.id)
            if (indexProduct === -1){
                item.count = 1
                newCart.push(item)
                setCart(newCart)
            } else {
                newCart[indexProduct].count += 1
                setCart(newCart)
            }
        }
        localStorage.setItem("Cart", JSON.stringify(newCart))
    }

    const totalProducts = () => {
        let total = cart.reduce((acc, product) => acc + product.count, 0)
        return total
    }

    const vaciarCarrito = () => {
        setCart([])
        localStorage.removeItem("Cart")
    }

    const removeItem = (id) => {
        let persistentProducts = cart.filter(prods => prods.id+prods.talleSeleccionado !== id)
        setCart(persistentProducts)
        localStorage.setItem("Cart", JSON.stringify(persistentProducts))
    }

    const totalPrice = () => {
        let total = cart.reduce((acc, product) => acc + (product.precio*product.count),0)
        return total
    }

    const setQuantity = (id, count) => {
        const indexProduct = cart.findIndex(product => product.id === id)
        newCart[indexProduct].count = count
        setCart(newCart)
        localStorage.setItem("Cart", JSON.stringify(newCart))
    }

    useEffect(()=>{
        isLocalStorage()
    },[])

    return (
        <Provider
            value={{
                cart,
                totalProducts,
                addToCart,
                vaciarCarrito,
                removeItem,
                totalPrice,
                setQuantity
            }}
        >
            {children}
        </Provider>
    );
}

export {cartContext, CartContextProvider};
