import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from "../../../src/image/banner/banner-1.jpg"
import banner2 from "../../../src/image/banner/banner-2.jpg"
import banner3 from "../../../src/image/banner/banner-3.jpg"
import useServices from '../../Hook/Hook';
import Details from '../Details/Details';

const Home = () => {
  const [index, setIndex] = useState(0);
  const [services] =useServices()

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <div>
            <div className="container">
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
      <div className="container">
        {
          services.slice(0, 6).map(service =><Details
          key ={service.key}
          service ={service}
          ></Details>)
        }
      </div>
        </div>
    );
};

export default Home;