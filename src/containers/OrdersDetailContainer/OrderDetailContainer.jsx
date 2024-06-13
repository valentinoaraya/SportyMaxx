import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./OrderDetailContainer.css"
import OrderDetail from '../../components/OrderDetail/OrderDetail.jsx';
import { getBuyOrder } from '../../services/firebase.js';

const OrderDetailContainer = () => {

    const { id } = useParams();
    const [order, setOrder] = useState(null);
    
    useEffect(() => {
        const getOrder = async () => {
            try {
                const response = await getBuyOrder(id)
                setOrder({...response, id: id.slice(0,6)})
            } catch (error) {
                console.log(error)
            }
        }
        getOrder()
    }, [id])

    return (
        <div className='divOrderDetailContainer'>
            <OrderDetail order={order} />
        </div>
    );
}

export default OrderDetailContainer;