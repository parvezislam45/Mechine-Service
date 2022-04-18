import React, { useState } from 'react';
import { Carousel, Row } from 'react-bootstrap';
import banner1 from "../../../src/image/banner/repair.png"
import banner2 from "../../../src/image/banner/coffe.jpg"
import banner3 from "../../../src/image/banner/handle.jpg"
import useServices from '../../Hook/Hook';
import Details from '../Details/Details';
import img from '../../../src/image/david.png'
import ayon from '../../../src/image/ayon.jpg'
import asharaful from '../../../src/image/ashraful.jpg'
import shabbir from '../../../src/image/shabbir.jpg'
import sourav from '../../../src/image/sourav.jpg'
import tamim from '../../../src/image/tamim.jpg'
import parvez from '../../../src/image/parvez.jpg'
import Font from 'react-font';

const Home = () => {
    const [index, setIndex] = useState(0);
    const [services] = useServices()

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
            <div className="">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Well Come To David Service</h3>
                            <p>All You Need Their</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>All Maintenance Service</h3>
                            <p>Any Kind Of Maintenance There</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>High Class Service Available</h3>
                            <p>Your All Needed Their</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="d-flex flex-column justify-content-center h-100">
                            <Font family='Roboto' cursive weight={800}>
                                <h1 className='text-pink-600 mt-5'>Well Come To David Machine Service Center</h1>
                            </Font>
                            <Font family='Roboto' cursive weight={800}>
                                <h3 className='text-pink-600 mt-5'>All Kind Of Mechine Service & Repair</h3>
                            </Font>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex justify-content-center align-items-center">
                            <img className=' image img-fluid' src={parvez} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Font family='Roboto' cursive weight={800}>
                <h1 className='text-pink-600 mt-5'>My Service</h1>
            </Font>
            <div className="">
                <Row xs={1} md={3} className="g-4">
                    {
                        services.slice(0, 6).map(service => <Details
                            key={service.key}
                            service={service}
                        ></Details>)
                    }
                </Row>
            </div>
            <div className="section ">
                <Font family='Roboto' cursive weight={800}>
                    <h1 className='text-pink-600'>Happy Client Review</h1>
                </Font>
                <div className="row row-cols-1 row-cols-md-3 g-4 mt-2 container">
                    <div className="col">
                        <div className="card">
                            <div className='d-flex align-items-center'>
                                <div>
                                    <img src={img} className="card-img-top image w-75 rounded-circle mx-auto d-block" alt="..." />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title"><Font family='Roboto' cursive weight={800}>
                                        <p>David</p>
                                    </Font></h5>
                                    <h6><Font family='Roboto' cursive weight={800}>
                                        <p>He Is a Good Expert.his Service High Class.i am Satified his service</p>
                                    </Font></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className='d-flex align-items-center'>
                                <div>
                                    <img src={shabbir} className="card-img-top image w-50 rounded-circle mx-auto d-block" alt="..." />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title"><Font family='Roboto' cursive weight={800}>
                                        <p>Shabbir Mahammud</p>
                                    </Font></h5>
                                    <h5>Ratings</h5>
                                    <h6><Font family='Roboto' cursive weight={800}>
                                        <p>I Love His Service.his behavior Her Work Experence so Good</p>
                                    </Font></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className='d-flex align-items-center'>
                                <div>
                                    <img src={ayon} className="card-img-top image w-75 rounded-circle mx-auto d-block" alt="..." />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title"><Font family='Roboto' cursive weight={800}>
                                        <p>Ayon Judder</p>
                                    </Font></h5>
                                    <h6><Font family='Roboto' cursive weight={800}>
                                        <p>I LOve His Service.alWays good service provide</p>
                                    </Font></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className='d-flex align-items-center'>
                                <div>
                                    <img src={sourav} className="card-img-top image w-75 rounded-circle mx-auto d-block" alt="..." />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title"><Font family='Roboto' cursive weight={800}>
                                        <p>Sourav Arefin</p>
                                    </Font></h5>
                                    <h6><Font family='Roboto' cursive weight={800}>
                                        <p>HIs Work Very Good.I refer to people get service him</p>
                                    </Font></h6>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className='d-flex align-items-center'>
                                <div>
                                    <img src={asharaful} className="card-img-top image w-75 rounded-circle mx-auto d-block" alt="..." />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title"><Font family='Roboto' cursive weight={800}>
                                        <p>Asharaful Islam</p>
                                    </Font></h5>
                                    <h6><Font family='Roboto' cursive weight={800}>
                                        <p>He is Highly Work for Mechine.His Reparing Good service </p>
                                    </Font></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className='d-flex align-items-center'>
                                <div>
                                    <img src={tamim} className="card-img-top image w-75 rounded-circle mx-auto d-block" alt="..." />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title"><Font family='Roboto' cursive weight={800}>
                                        <p>Tamim</p>
                                    </Font></h5>
                                    <h6><Font family='Roboto' cursive weight={800}>
                                        <p>His Work so Good.I am Highly Remmand to his Workshop</p>
                                    </Font></h6>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;