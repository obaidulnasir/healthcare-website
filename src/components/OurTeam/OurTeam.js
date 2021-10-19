import React from "react";
import "./OurTeam.css";

const OurTeam = () => {
  return (
    <div>
      <div className="team">
        <div className="container py-5">
          <h2 className="text-center text-white py-5">Our Doctors</h2>
        </div>
      </div>
      {/* doctor  */}
      <div className="service-section">
        <div className="container py-5">
          <div className="row g-2">
            <div className="col-md-3 col-sm-12 d-flex align-items-stretch">
              <div className="text-center text-white border p-3">
                <img src="https://i.ibb.co/n1549NM/doctor1.jpg" width="80%" alt="" srcset="" />
                <h3>Sheeren Collins</h3>
                <p>Veterinarian</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-12 d-flex align-items-stretch">
              <div className="text-center text-white border p-3">
                <img src="https://i.ibb.co/9YG0MDH/doctor2.jpg" width="80%" alt="" srcset="" />
                <h3>Sheeren Collins</h3>
                <p>Veterinarian</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-12 d-flex align-items-stretch">
              <div className="text-center text-white border p-3">
                <img src="https://i.ibb.co/sW4cw59/doctor3.jpg" width="80%" alt="" srcset="" />
                <h3>Michelle Wright</h3>
                <p>Veterinarian</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-12 d-flex align-items-stretch">
              <div className="text-center text-white border p-3">
                <img src="https://i.ibb.co/djq03mL/photo-1559839734-2b71ea197ec2-ixid-Mnwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hx8-ixlib-rb-1.jpg" width="80%" alt="" srcset="" />
                <h3>Yoneko Tamaki</h3>
                <p>Medical Director</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
