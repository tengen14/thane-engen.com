import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div id="projects">
      <h2>Projects</h2>
      <Link to="/wikipedia-viewer">Wikipedia Project</Link>
      <Link to="/recipe-box">Recipe Box</Link>
    </div>
  );
};

export default Projects;
