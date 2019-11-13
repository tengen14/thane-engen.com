import React from "react";
import { Link } from "react-router-dom";
import Octicon, {KebabHorizontal} from "@primer/octicons-react";
import logo from "../imgs/thane-engen-logo.png";

const NavBar = () => {
  return (
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
        <span><Octicon icon={KebabHorizontal} size="medium"/></span>
      </button>
      <div className="collapse navbar-collapse d-sm-flex justify-content-end text-right" id="navbarNavAltMarkup">
        <div className="navbar-nav ">
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
          <Link className="nav-item nav-link" to="#">
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
