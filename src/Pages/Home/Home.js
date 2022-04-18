import React, { useState } from 'react';
import { Carousel, Row } from 'react-bootstrap';
import banner1 from "../../../src/image/banner/banner-1.jpg"
import banner2 from "../../../src/image/banner/banner-2.jpg"
import banner3 from "../../../src/image/banner/banner-3.jpg"
import useServices from '../../Hook/Hook';
import Details from '../Details/Details';
import img from '../../../src/image/david.png'
import ayon from '../../../src/image/ayon.jpg'
import asharaful from '../../../src/image/ashraful.jpg'
import shabbir from '../../../src/image/shabbir.jpg'
import sourav from '../../../src/image/sourav.jpg'
import tamim from '../../../src/image/tamim.jpg'
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
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <h1>Our Services</h1>
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
                <h1>Happy Client Review</h1>
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