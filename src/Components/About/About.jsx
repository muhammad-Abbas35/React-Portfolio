import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import about_profile from "../../assets/about_profile.jpg";
export const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={about_profile} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a skilled Frontend Developer with a strong foundation in web
              development. Through self-learning and hands-on projects, I have
              gained practical experience in building dynamic and responsive
              websites.
            </p>
            <p>
              My passion for frontend development drives me to continuously
              improve my skills and stay updated with the latest technologies,
              ensuring high-quality and user-friendly web experiences.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS </p>
              <hr style={{ width: "40%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript </p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React Js </p>
              <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-acheivements">
        <hr />

        <div className="about-acheivement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />

        <div className="about-acheivement">
          <h1>CONT.. GRADUATION</h1>
          <p>BSIT 5th SEMS</p>
        </div>
        <hr />
      </div>
    </div>
  );
};
