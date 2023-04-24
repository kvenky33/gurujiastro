import React from "react";
import "./solution.css";
import star from "../assets/icons/Star.png";
import sun from "../assets/images/Sun2.png";
import zordiac from "../assets/images/Zordiac.png";
import love from "./Images1/love.png";
import many from "./Images1/many.png";
import job from "./Images1/job.png";
import marraige from "./Images1/marraige.png";
import education from "./Images1/education.png";

import child from "./Images2/child.png";
import family from "./Images2/family.png";
import health from "./Images2/health.png";
import lucky from "./Images2/lucky.png";
import shanti from "./Images2/shanti.png";

const Solution = () => {
  const Array1 = [love, many, job, marraige, education];
  const Array2 = [child, family, health, lucky, shanti];
  return (
    <div className="solution">
      <div className="flex-heading">
        <img src={star} className="star" alt="star" />
        <h1 className="heading">Many Problems One Solution</h1>
        <img src={star} className="star" alt="star" />
      </div>
      <div className="part2">
        <div className="sin-flex">
          {Array1.map((image) => {
            return <img src={image} alt="problem" />;
          })}
        </div>
        <div>
          <img src={zordiac} className="zordiac" alt="zordiac" />
          <img src={sun} className="sun" alt="sun" />
        </div>
        <div className="sin-flex">
          {Array2.map((image) => {
            return <img src={image} alt="problem" />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Solution;
