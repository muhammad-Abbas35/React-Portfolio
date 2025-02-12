import React from "react";
import profile_img from "../../assets/abbas.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

import "./Hero.css";
export const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm M.Abbas Khan,</span> Fronted Developer based in PAK.
      </h1>
      <p>
        I am a Frontend Developer from Karachi, Pakistan, with a strong passion
        for web development. I have learned online and built multiple projects
        to refine my skills.
      </p>
      <div className="hero-section">
        <div
          className="hero-connect"
          onClick={() => {
            setmenu("hero");
            scrollToSection("hero");
          }}
        >
          {" "}
          <AnchorLink className="anchor-link" href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};
