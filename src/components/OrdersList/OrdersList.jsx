import React, { useEffect, useState } from 'react';
import "./OrdersList.css"
import Order from './Order/Order.jsx';
import axios from 'axios';

const OrdersList = () => {

    const [orders, setOrders] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const token = localStorage.getItem("token")

    useEffect(()=>{

        const getOrders = async ()=> {
            try{
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/orders`, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${token}`
                    }
                })
                setOrders(response.data.data)
                setIsLoading(false)
            } catch(error){
                console.log(error)
            }
        }

        getOrders()
    
    }, [token])

    return (
        <div className='divOrdersList'>
            {
                isLoading ? 
                <div className='divLoading'>
                    <h1>Cargando...</h1>
                </div> 
                :
                orders.length === 0 ?
                <h1>No se encontraron órdenes</h1>
                :
                orders.map(({buyer, date, id, total })=>{
                    return <Order
                        key={id}
                        id={id}
                        buyer={buyer}
                        date={date}
                        total={total}
                    />
                })
            }
        </div>
    );
}

export default OrdersList;
