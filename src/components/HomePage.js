import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark">
        <Link to="#" className="navbar-brand">
          Thane Engen
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
            <Link
              className="nav-item nav-link"
              to="#"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
      <h1>Home Page</h1>
    </div>
  );
};

export default HomePage;
