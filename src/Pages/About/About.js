import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import Font from 'react-font';
import img from '../../../src/image/david.png'
import './about.css'

const About = () => {
    return (
        <div>
            <Font family='Roboto' cursive weight={800}>
                <h6 className='text-center fs-4 fw-bold'>About</h6>
            </Font>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="d-flex justify-content-center align-items-center shadow p-3 mb-5 bg-body rounded">
                            <img className='img-fluid' src= {img} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 shadow p-3 mb-5 bg-body rounded text-start">
                        <Font family='Roboto' cursive weight={800}>
                            <h1 className='text-center fs-1 fw-bold'>Parvez Islam</h1>
                        </Font>
                        <Font family='Roboto' cursive weight={800}>
                            <h4 className='text-center fw-bold'>Web Developer</h4>
                        </Font>
                        <Font family='Roboto' cursive weight={800}>
                            <p className='text-center fs-5' >B.S.C Engineer Mechanical</p>
                        </Font>
                        <Font family='Roboto' cursive weight={800}>
                            <h6 className='text-center fs-4 fw-bold'>Something About Me</h6>
                        </Font>
                        <Font family='Roboto' cursive weight={800}>
                            <p>I am Parvez Islam. I was born in Narsingdi. My father is an established businessman.I grew up in Narsingdi from a young age.Anger is too much but respect for people as human beings does not give money power.State Forward people are not afraid to tell the truth.They are willing to do everything for Islam.I love Islam with my life.i have Love Playing Cricket Since Childhood !!</p>
                        </Font>
                        <Font family='Roboto' cursive weight={800}>
                            <h6 className='text-center fs-4 fw-bold'>Future Goal</h6>
                        </Font>
                        <Font family='Roboto' cursive weight={800}>
                            <p>I want to be a good programmer. I want to do something new.I want to do something for Islam by using cyber. I want to lead my life in an honest way.I always hope for Allah's help !! </p>
                        </Font>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;