import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("./pets-fake-data.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div>
      <h4>length: {service.length}</h4>
      <div>
        <div className="container">
          <div className="row services">
            {service.map((service) => (
              <Service key={service.key} service={service}></Service>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
