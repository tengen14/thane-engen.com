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
      <a name="top" />
      <NavBar />
      <Entrance />
      <Projects />
      <br />
      <About />
      <br />
      <Contact />
      <br />
    </div>
  );
};

export default HomePage;
