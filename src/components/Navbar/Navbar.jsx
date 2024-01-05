import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";
import Logo from "../../imgs/logo.png";
import {
    faEnvelope,
  faBell,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons"; // Replace with actual icons

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container d-flex justify-content-between">
        {/* logo */}
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>

        <div className="navbar-icons">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <FontAwesomeIcon icon={faBell} className="icon" />
          <FontAwesomeIcon icon={faUserCircle} className="icon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
