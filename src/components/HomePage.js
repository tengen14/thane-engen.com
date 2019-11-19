import React from "react";
import NavBar from "./NavBar";
import HomeParticles from "./HomeParticles";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import "../styles/index.scss";

const HomePage = () => {
  return (
    <div id="Home">
      <a name="top" />
      <NavBar />
      <HomeParticles />
      <div id="enter-site-content" className="text-center">
        <h1>My Name is Thane Engen and I am a Web Developer</h1>
        <a href="#about">
          <button type="button" className="red-button">
            Learn More
          </button>
        </a>
      </div>
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default HomePage;
