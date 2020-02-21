import React from "react";
import NavBar from "./NavBar";
import Entrance from "./Entrance";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import "../styles/index.scss";

const HomePage = () => {
  return (
    <div id="Home">
      <div id="top" />
      <NavBar />
      <Entrance />
      <div className="divider"></div>
      <Projects />
      <About />
      <Contact />
      <div className="divider">
        <footer className="divider">
          {/* <small>Copyright &copy; 2020, Thane Engen. All Rights Reserved</small> */}
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
