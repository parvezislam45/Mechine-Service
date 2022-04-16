import React from 'react';
import useServices from '../../Hook/Hook';
import Details from '../Details/Details';

const Services = () => {
    const [services,setServices] = useServices()
    return (
        <div>
            <h1>Services</h1>
            {
                services.map(service=><Details
                key = {service.key}
                service ={service}
                ></Details>)
            }
        </div>
    );
};

export default Services;