import React from "react";
import Card from "./Card";
import "./Astrologers.css";
import star from "../assets/icons/Star.png";
import astro1 from "./Images/astrologer1.png";
import astro2 from "./Images/astrologer2.png";
import astro3 from "./Images/astrologer3.png";
import astro4 from "./Images/astrologer4.png";
import astro5 from "./Images/astrologer5.png";
import astro6 from "./Images/astrologer6.png";
import astro7 from "./Images/astrologer7.png";
import astro8 from "./Images/astrologer8.png";
import astro9 from "./Images/astrologer4.png";

const Astrologers = () => {
  let astrologers = [
    { id: 1, img: astro1 },
    { id: 2, img: astro2 },
    { id: 3, img: astro3 },
    { id: 4, img: astro4 },
    { id: 5, img: astro5 },
    { id: 6, img: astro6 },
    { id: 7, img: astro7 },
    { id: 8, img: astro8 },
    { id: 9, img: astro9 },
  ];
  return (
    <div className="container">
      <div className="flex-heading">
        <img src={star} className="star" alt="star" />
        <h1 className="heading">Premium Astrologers</h1>
        <img src={star} className="star" alt="star" />
      </div>
      <div className="column-flex">
        {astrologers.map((item) => (
          <div
            key={item}
            style={{
              backgroundImage: `url(${item.img})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "auto",
            }}
          >
            <Card />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Astrologers;
