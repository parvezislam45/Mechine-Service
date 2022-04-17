import React from 'react';
import { Link } from 'react-router-dom';

const Details = ({service}) => {
    const {name,img,details,price}=service;
    return (
        <div className='shadow-lg p-2 mb-3 bg-body rounded mx-auto david'>
            <img className='border border-primary rounded' src={img} alt="" />
            <h4>{name}</h4>
            <p>{details}</p>
            <h5>{price}</h5>
            <button type="button" class="btn btn-success"><Link to="/checkout">Procced Checkout</Link></button>
        </div>
    );
};

export default Details;