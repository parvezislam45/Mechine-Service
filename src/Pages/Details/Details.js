import React from 'react';

const Details = ({service}) => {
    const {name,img,ratings}=service;
    return (
        <div>
            <h6>{name}</h6>
            <img src={img} alt="" />
        </div>
    );
};

export default Details;