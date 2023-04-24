import React from "react";
import guru from "../assets/images/Group 51003.png";
import "./footer.css";
import social1 from "./Images/social-1.png";
import social2 from "./Images/social-2.png";
import social3 from "./Images/social-3.png";
import social4 from "./Images/social-4.png";
import patym from "./Images/paytm.png";
import razorpay from "./Images/Razorpay.png";
import stripe from "./Images/stripe.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="part1">
        <div>
          <img src={guru} className="guru" alt="guru" />
          <p className="para">
            About Guruji s2 to 3 lines what guruji do and how it works About
            Guruji s2 to 3 lines what guruji do and how it works
          </p>
          <div className="social">
            <img src={social1} className="social" alt="social1" />
            <img src={social2} alt="social2" />
            <img src={social3} alt="social3" />
            <img src={social4} alt="social4" />
          </div>
        </div>
        <div>
          <h3>Trusted ans Sales</h3>
          <div className="social">
            <img src={patym} alt="paytm" />
            <img src={razorpay} alt="razorpay" />
            <img src={stripe} alt="stripe" />
          </div>
        </div>
      </div>
      {/* part 2 */}
      <div className="part">
        <div>
          <h3>Customers</h3>

          <p>Home</p>
          <p>Privacy Policy</p>
          <p>T & C</p>
          <p>Varied Payment</p>
        </div>
        <div>
          <h3>Collaborate</h3>

          <p>Clever Top</p>
          <p>Exotel</p>
          <p>Facebook</p>
          <p>Quora</p>
          <p>Google</p>
          <p>Youtube</p>
        </div>
      </div>
      {/* part3 */}
      <div className="part">
        <div>
          <h3>Support</h3>

          <p>Home</p>
          <p>Privacy Policy</p>
          <p>T & C</p>
          <p>Varied Payment</p>
        </div>
        <div>
          <h3>Important Link</h3>

          <p>Tarat Reader</p>
          <p>Vedic Astrology</p>
          <p>Palmistry</p>
          <p>Gemology</p>
          <p>Vastu</p>
          <p>Numerology</p>
        </div>
      </div>
      {/* part4 */}
      <div>
        <form className="form">
          <input type="text" className="input-text" placeholder="name" />
          <input type="text" className="input-text" placeholder="Email Id" />
          <input
            style={{ height: "100px" }}
            type="textarea"
            className="input-text"
            placeholder="write query"
          />
          <button className="submit"> SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
