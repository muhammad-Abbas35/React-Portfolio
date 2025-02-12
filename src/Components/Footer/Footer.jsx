import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/Abbas.png";
import user_icon from "../../assets/user_icon.svg";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="" className="abbas" />
          <p>
            I am a Frontend Developer from Karachi, Pakistan, with a strong
            passion for web development.
          </p>
        </div>

        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter Your Email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>&copy; 2025 M.Abbas_khan. All rights reserved.</p>
        <div className="footer-bottom-right">
          <p>Terms of services</p>
          <p>Privacy Policy</p>
          <p>Contact With me</p>
        </div>
      </div>
    </div>
  );
};
