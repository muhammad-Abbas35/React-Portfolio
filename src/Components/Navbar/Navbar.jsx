import React, { useRef, useState } from "react";
import underline from "../../assets/nav_underline.svg";
import "./Navbar.css";
import logo from "../../assets/Abbas.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
export const Navbar = () => {
  const [menu, setmenu] = useState("contact");
  const menuRef = useRef();
  const openmenu = () => {
    menuRef.current.style.right = "0";
  };
  const closemenu = () => {
    menuRef.current.style.right = "-350px";
  };
  return (
    <>
      <div className="navbar">
        <img src={logo} alt="" className="abbas" />
        <img
          src={menu_open}
          onClick={openmenu}
          alt=""
          className="nav-mob-open"
        />
        <ul ref={menuRef} className="nav-menu">
          <img
            src={menu_close}
            alt=""
            onClick={closemenu}
            className="nav-mob-close"
          />
          <li>
            <AnchorLink className="anchor-link" href="#home">
              <p onClick={() => setmenu("home")}>Home</p>
            </AnchorLink>
            {menu === "home" ? <img src={underline} alt="" /> : <></>}
          </li>
          <li>
            <AnchorLink className="anchor-link" href="#about">
              <p onClick={() => setmenu("about")}>About Me</p>
            </AnchorLink>
            {menu === "about" ? <img src={underline} alt="" /> : <></>}
          </li>
          <li>
            <AnchorLink className="anchor-link" href="#services">
              <p onClick={() => setmenu("services")}>Services</p>
            </AnchorLink>
            {menu === "services" ? <img src={underline} alt="" /> : <></>}
          </li>
          <li>
            <AnchorLink className="anchor-link" href="#work">
              <p onClick={() => setmenu("work")}>Portfolio</p>
            </AnchorLink>
            {menu === "work" ? <img src={underline} alt="" /> : <></>}
          </li>
          <li>
            <AnchorLink className="anchor-link" href="#contact">
              <p onClick={() => setmenu("contact")}>Contact</p>
            </AnchorLink>
            {menu === "contact" ? <img src={underline} alt="" /> : <></>}
          </li>
        </ul>
        <div className="nav-connect">
          <AnchorLink className="anchor-link" href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
      </div>
    </>
  );
};
