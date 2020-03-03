import React from "react";
import Octicon, { KebabHorizontal } from "@primer/octicons-react";
import logo from "../imgs/thane-engen-logo.png";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark position-fixed">
      <a href="#top" className="navbar-brand">
        <img src={logo} alt="" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span>
          <Octicon icon={KebabHorizontal} size="medium" />
        </span>
      </button>
      <div
        className="collapse navbar-collapse d-sm-flex justify-content-end text-right"
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav ">
          <a className="nav-item nav-link" href="#projects">
            Projects
          </a>
          <a className="nav-item nav-link" href="#about">
            About
          </a>
          <a className="nav-item nav-link" href="#contact">
            Contact
          </a>
          <a
            className="nav-item nav-link"
            target="_blank"
            rel="noopener noreferrer"
            title="View Resume in Google Docs"
            href="https://drive.google.com/file/d/1Wk4ahEcnCTMlKDD0oeK8CKQFsRg65U9p/view?usp=sharing"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
