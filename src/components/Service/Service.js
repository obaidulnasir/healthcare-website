import React from 'react';
import { Link } from 'react-router-dom';
import "./Service.css"

const Service = (props) => {
    const {title, description, mini_description, img}= props.service;
    return (
           <div className="service text-center p-5">
                <h3>{title}</h3>
                <p>{mini_description}</p>
                <Link className="btn btn-success">See More</Link>
           </div>
        
    );
};

export default Service;