import React from "react";

const Footer = () => {
  return (
    <div className="bg-dark">
      <div className="container py-5">
        <div className="row text-white">
          <div className="col-md-6">
            <h3>Pets Care</h3>
            <p className="text-muted">
              With our Complete Care Health Plan, you'll receive all the
              healthcare essentials, expert veterinary care and cost savings on
              routine treatments.
            </p>
          </div>
          <div className="col-md-3"></div>
          <div className="col-md-3">
              <h4>Stay With Us</h4>
            <u>
              <i class="bi bi-instagram p-3 fs-3 "></i>
              <i class="bi bi-twitter p-3 fs-3 "></i>
              <i class="bi bi-reddit p-3 fs-3 "></i>
              <i class="bi bi-telegram p-3 fs-3 "></i>
            </u>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
