import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../Hook/Hook';
import Details from '../Details/Details';

const Services = () => {
    const [services,setServices] = useServices()
    return (
        <div>
            <h1>Services</h1>
            <Row xs={1} md={3} className="">
            {
                services.map(service=><Details
                key = {service.key}
                service ={service}
                ></Details>)
            }
            </Row>
        </div>
    );
};

export default Services;