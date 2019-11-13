import React from "react";
import NavBar from "./NavBar";
import HomeParticles from "./HomeParticles";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <HomeParticles />
      <div className="text-center">
        <h1>My Name is Thane Engen and I am a Web Developer</h1>
        <button type="button" className="red-button">Learn More</button>
      </div>
    </div>
  );
};

export default HomePage;
