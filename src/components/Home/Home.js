import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="banner-section">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-6 p-5 text-white">
              <h2>First I wanted to be a veterinarian</h2>
              <p>
                Lorem Ipsum available but the majority have suffered alteration
                in some form, by injected humour randomized words.
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
      <div className="container my-5">
        <div className="row d-flex align-items-center">
          <div className="col-md-6 p-5">
            <h4>As a veterinarian and lover of animals.</h4>
            <p className="text-muted">
              Lorem Ipsum available but the majoty suffered alteration in some
              form, by humour randomised words.
            </p>
            <button className="btn btn-info rounded text-white">
                Our Services
              </button>
          </div>
          <div className="col-md-6">
              <img className="rounded" width="70%" src="./img/vaccinate.jpg" alt="vaccinate" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
