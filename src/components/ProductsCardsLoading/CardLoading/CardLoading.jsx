import React from 'react';
import './CardLoading.css'

const CardLoading = () => {
    return (
        <div className="card is-loading card-is-loading">
            <div className='image'></div>
            <div className="card-body">
                <h2 className="card-title"> </h2>
                <p> </p>
            </div>
        </div>
    );
}

export default CardLoading;
