import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import HomeParticles from "./HomeParticles";
import About from "./About";

const HomePage = () => {
  return (
    <div>
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
    </div>
  );
};

export default HomePage;
