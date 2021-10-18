import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ServiceDetails = () => {
  const { serviceId } = useParams();

  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("/pets-fake-data.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  const singleItem = service.find(
    (singleService) => singleService.key == serviceId
  );
  // const{title, description} = singleItem;
  console.log(singleItem);

  return (
    <div>
      <div className="service-details">
        <div className="container">
          <div className="row text-center">
            <div className="col">
              <img className="mt-3 rounded" src={singleItem?.img} width="70%" alt="" />
              <div className="w-50 mx-auto my-4">
                <h3>{singleItem?.title}</h3>
                <p>{singleItem?.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
