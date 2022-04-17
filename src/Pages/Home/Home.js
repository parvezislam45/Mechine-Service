import React, { useState } from 'react';
import { Card, CardGroup, Carousel, Col, Row } from 'react-bootstrap';
import banner1 from "../../../src/image/banner/banner-1.jpg"
import banner2 from "../../../src/image/banner/banner-2.jpg"
import banner3 from "../../../src/image/banner/banner-3.jpg"
import img1 from "../../../src/image/axis-1683671__340.jpg"
import img2 from "../../../src/image/cnc-lathe-machine-drilling-hole-brass-shaft-part-drill-tool-hi-technology-automotive-manufacturing-process-144510691.jpg"
import useServices from '../../Hook/Hook';
import Details from '../Details/Details';

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
            <div className="section">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card">
                            <img src={img1} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={img2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={img1} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className='mt-5'>
                <div class="card text-center bg-dark">
                    <div class="card-body">
                        <h5 class="card-title text-white">Design By Aurthohin Parvez</h5>
                        <p class="card-text text-white">Learner Programming Hero<br></br>Batch-5</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;