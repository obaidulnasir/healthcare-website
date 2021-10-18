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
  const{title, description} = singleItem;
 
  return (
    <div>
      {title} {description}
    </div>
  );
};

export default ServiceDetails;
