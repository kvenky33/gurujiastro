import React from "react";
import "./card.css";
import message from "./Images/message.png";
import call from "./Images/call.png";
import live from "./Images/live.png";
import online from "./Images/online.png";

const Card = () => {
  return (
    <div className="bodycontainer1">
      <div className="main">
        <div className="top">
          <p className="online">10+ Years</p>
          <img src={online} alt="online" className="online" />
        </div>
        <div className="middle-con">
          <div className="left">
            <h2>Astrologer Ramaraj</h2>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ color: "#FFDBC0" }}>specialist</span>
              <span>Love,Bussiness,life</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ color: "#FFDBC0" }}>skills</span>
              <span>Vedic ,Astrollogy,Kundal</span>
            </div>
          </div>
          <div className="right-con">
            <b>
              {" "}
              <h2>
                Price <br /> <span>₹10 </span>/min
              </h2>
            </b>
          </div>
        </div>
        <div className="bottom-con">
          <button className="live-btn">
            <img
              src={live}
              alt="live"
              className="live-img"
              style={{ width: "90%", height: "90%" }}
            />
          </button>
          <button className="chat-btn">
            <span
              style={{
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={message} alt="message" className="chat-img" />
              Chat
            </span>
          </button>

          <button className="call-btn">
            <span
              style={{
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={call} alt="call" className="call-img" />
              Call
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
