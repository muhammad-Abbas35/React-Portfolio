import React from "react";
import theme_pattern from "../../assets/theme_pattern.svg";
import arrow_icon from "../../assets/arrow_icon.svg";
import services_data from "../../assets/services_data";
import "./Services.css";
export const Services = () => {
  return (
    <div id="services" className="services">
      <div className="service-tittle">
        <h1>MY Services</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        {services_data.map((Service, index) => {
          return (
            <div key={index} className="services-format">
              <h3>{Service.s_no}</h3>
              <h2>{Service.s_name}</h2>
              <p>{Service.s_desc}</p>
              <div className="services-readmore">
                <p>read more</p>
                <img src={arrow_icon} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
