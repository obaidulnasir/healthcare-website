import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {

  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("./pets-fake-data.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);


  return (
    <div>
      <div className="banner-section">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-6 p-5 text-white">
              <h2>Help animal find safety an love.</h2>
              <p>
              Extraordinary Service. Remarkable Care. ANYTIME you need us.
              </p>
              <button className="btn btn-info rounded text-white">
                Contact Us
              </button>
            </div>
            <div className="col-md-6 p-5">
              <img width="70%" src="./img/dog.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* second section  */}
      <div className="container my-5">
        <div className="row d-flex align-items-center">
          <div className="col-md-6 p-5">
            <h4>As a veterinarian and lover of animals.</h4>
            <p className="text-muted">
            With compassion, respect, and expertise, our mission is to help our clients, their companions, and our referral veterinarians when they need it most. 
            </p>
            
          </div>
          <div className="col-md-6">
            <img
              className="rounded"
              width="70%"
              src="./img/vaccinate.jpg"
              alt="vaccinate"
            />
          </div>
        </div>
      </div>

      {/* service section */}
      <div className="service-section">
        <div className="container py-5">
          <div className="row g-2">
            {service.slice(1,7).map(service=>
            <div className="col-md-4 col-sm-12 d-flex align-items-stretch">
              <div className="text-center text-white border p-3">
                <img src={service.img} width="60%" alt="" srcset="" />
                <h3>{service.title}</h3>
                <p>{service.description.slice(0,100)}...</p>
                <Link to={`/service/${service.key}`} className="btn btn-success">See More Details</Link>
              </div>
            </div>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
