import React from 'react';
import { Row } from 'react-bootstrap';
import Font from 'react-font';
import useServices from '../../Hook/Hook';
import Details from '../Details/Details';

const Services = () => {
    const [services,setServices] = useServices()
    return (
        <div>
            <Font family='Roboto' cursive weight={800}>
                        <h1>Services</h1>
                            </Font>
            <Row xs={1} md={3}>
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