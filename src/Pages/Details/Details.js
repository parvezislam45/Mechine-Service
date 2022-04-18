import React from 'react';
import Font from 'react-font';
import { Link } from 'react-router-dom';

const Details = ({service}) => {
    const {name,img,details,price}=service;
    return (
        <div className=' container mt-5'>
            <img src={img} alt="" />
            {<Font family='Roboto' cursive weight={800}>
                    <h3>{name}</h3>
                            </Font>}
            <p>{<Font family='Roboto' cursive weight={800}>
                        <h5>{details}</h5>
                            </Font>}</p>
            <h5> {<Font family='Roboto' cursive weight={800}>
                        <h4>${price}</h4>
                            </Font>}</h5>
            <button type="button mt-2" class="btn btn-success"><Link to="/checkout"><Font family='Roboto' cursive weight={800}>
                        <span className='text-white'>Go Checkout</span>
                            </Font></Link></button>
        </div>
    );
};

export default Details;