import React from "react";
import "./Home.css";

import guru from "../assets/images/Group 51003.png";
import hero from "../assets/images/Ellipse 11.png";
import customersupport from "../assets/icons/Customer support.png";
import Privatenetwork from "../assets/icons/Private Network.png";
import Refund from "../assets/icons/Refund.png";
import Secure from "../assets/icons/Secure.png";
import Verified from "../assets/icons/Verified.png";

const Home = () => {
  return (
    <div className="home">
      <div className="nav">
        <img src={guru} className="guru" alt="guru" />
        <ul className="navlist">
          <li>Home</li>
          <li>Call with Astrologer</li>
          <li>Live(Coming soon)</li>
        </ul>
        <img src={hero} alt="hero" />
      </div>

      <div className="home-description">
        <h1 className="home-heading">"Astrology for clarity"</h1>
        <p className="home-para">
          Your Name is a Vedic Astrologer and has expertise in Vaastu and Mantra
          Theraphy
        </p>
        <button className="home-btn">Consult now</button>
      </div>
      <div className="home-feature-section">
        <ul className="home-features">
          <li className="home-icon">
            <img src={customersupport} alt="customersupport" />
            24 X 7 Customer Support
          </li>
          <li className="home-icon">
            <img src={Refund} alt=" 100% Refund " />
            100% Refund if Unsatisfied
          </li>
          <li className="home-icon">
            <img src={Privatenetwork} alt="Privatenetwork" />
            Private & Confidential
          </li>
          <li className="home-icon">
            <img src={Verified} alt="Verified astrologer" />
            Verified Astrologer
          </li>
          <li className="home-icon">
            <img src={Secure} alt="secure payment" />
            Secure Payment
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
