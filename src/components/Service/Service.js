import React from 'react';

const Service = (props) => {
    const {title, description, img}= props.service;
    return (
           <div className="col-md-4 border ">
                <h3>{title}</h3>
           </div>
        
    );
};

export default Service;