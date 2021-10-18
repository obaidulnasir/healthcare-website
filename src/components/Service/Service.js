import React from 'react';
import { Link } from 'react-router-dom';
import "./Service.css"

const Service = (props) => {
    const {title, description, key, img}= props.service;
    return (
           <div className="service text-center p-5">
               <img src={img} width="60%" className="rounded" alt="" />
                <h3>{title}</h3>
                <p >{description.slice(0,180)}....</p>
                <Link to={`/service/${key}`} className="btn btn-success">See More</Link>
           </div>
        
    );
};

export default Service;