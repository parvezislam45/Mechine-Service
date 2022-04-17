import React from 'react';
import { Link } from 'react-router-dom';

const Details = ({service}) => {
    const {name,img,details,price}=service;
    return (
        <div className='mx-auto border border-4 shadow p-3 mb-5 bg-body rounded'>
            <img className='border border-primary rounded' src={img} alt="" />
            <h4>{name}</h4>
            <p>{details}</p>
            <h5> ${price}</h5>
            <button type="button" class="btn btn-success"><Link to="/checkout"><span className='text-white'>Procced Checkout</span></Link></button>
        </div>
    );
};

export default Details;