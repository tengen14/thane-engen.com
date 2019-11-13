import React from "react";
import { Link } from "react-router-dom";
import HomeParticles from "./HomeParticles";
import logo from "../imgs/thane-engen-logo.png";

const HomePage = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark">
        <Link to="#" className="navbar-brand">
          <img src={logo} alt="Thane Engen Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link" to="#">
              About
            </Link>
            <Link className="nav-item nav-link" to="#">
              Skills
            </Link>
            <Link className="nav-item nav-link" to="#">
              Projects
            </Link>
            <Link className="nav-item nav-link" to="#">
              Contact
            </Link>
          </div>
        </div>
      </nav>
      <HomeParticles />
      <div className="text-center">
        <h1>My Name is Thane Engen and I am a Web Developer</h1>
        <button type="button" className="red-button">Learn More</button>
      </div>
    </div>
  );
};

export default HomePage;
