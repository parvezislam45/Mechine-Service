import React from 'react';
import { Link } from 'react-router-dom';

const Details = ({service}) => {
    const {name,img,details,price}=service;
    return (
        <div className=' container mt-5'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>{details}</p>
            <h5> ${price}</h5>
            <button type="button mt-2" class="btn btn-success"><Link to="/checkout"><span className='text-white'>Procced Checkout</span></Link></button>
        </div>
    );
};

export default Details;