import React, {useContext, useEffect, useState} from 'react';
import './IncDec.css'
import { cartContext } from '../../../../context/CartContext.jsx';
import Button from '../../../Button/Button.jsx';

const IncDec = ({product}) => {

    const {setQuantity} = useContext(cartContext)
    const [count, setCount] = useState(product.count)

    const maxLimit = product.stock

    const enabledDisabledAdd = product.count === product.stock ? true : false
    const enabledDisabledSub = product.count === 1 ? true : false

    const handleAdd = () => count < maxLimit ? setCount(product.count + 1) : setCount(product.count)
    const handleSubstract = () => count > 1 ? setCount(product.count - 1) : setCount(product.count)

    useEffect(() => {
        setQuantity(product.id, count)
    },[count, product.id])

    return (
        <div className='divIncDec'>
            <Button color={"btn-outline-dark"} onFinish={handleSubstract} enabledDisabled={enabledDisabledSub}>
                -
            </Button>
            <p>{product.count}</p>
            <Button color={"btn-outline-dark"} onFinish={handleAdd} enabledDisabled={enabledDisabledAdd}>
                +
            </Button>
        </div>
    );
}

export default IncDec;
