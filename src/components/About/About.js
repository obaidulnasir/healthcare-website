import React from 'react';
import "./About.css"

const About = () => {
    return (
        <div>
            <div className="about-banner">
                <div className="container py-5">
                    <h2 className="fs-1 fw-bolder text-white">About Us</h2>
                </div>
            </div>
            <div className="container my-5">
                <div className="row w-50 mx-auto text-center">
                    <div className="col">
                        <h3 className="fs-2 fw-bold"> We Are Their Voice</h3>
                        <p className="fs-5">The American Society for the Prevention of Cruelty to Animals® (ASPCA®) was the first humane society to be established in North America and is, today, one of the largest in the world.</p>
                        <p className="fs-5">Our organization was founded on the belief that animals are entitled to kind and respectful treatment at the hands of humans and must be protected under the law. Headquartered in New York City, the ASPCA maintains a strong local presence, and with programs that extend our anti-cruelty mission across the country, we are recognized as a national animal welfare organization. We are a privately funded 501(c)(3) not-for-profit corporation, and are proud to boast more than 2 million supporters across the country.</p>
                        <p className="fs-5">The ASPCA’s mission, as stated by founder Henry Bergh in 1866, is “to provide effective means for the prevention of cruelty to animals throughout the United States.”</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;