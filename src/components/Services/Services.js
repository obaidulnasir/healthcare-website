import React, { useEffect, useState } from 'react';

const Services = () => {
    const [service, setService]= useState([]);
    useEffect(()=>{
        fetch("./pets-fake-data.json")
        .then(res => res.json())
        .then(data => setService(data));
    },[])
    return (
        <div>
            <h3>this is services: {service.length}</h3>
        </div>
    );
};

export default Services;