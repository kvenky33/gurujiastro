import React from "react";
import "./Testimonials.css";
import sun from "../assets/images/Sun.png";
import star from "../assets/icons/Star.png";
import trustBanner from "../assets/images/trust banner-2 1.png";

const Testimonials = () => {
  return (
    <div className="Testimonials">
      <img src={sun} alt="sun" />
      <div className="flex-heading">
        <img src={star} className="star" alt="star" />
        <h1 className="heading">User Testimonial</h1>
        <img src={star} className="star" alt="star" />
      </div>
      <img src={trustBanner} className="trust-banner" alt="trust-banner" />
    </div>
  );
};

export default Testimonials;
