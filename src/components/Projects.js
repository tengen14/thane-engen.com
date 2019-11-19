import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div id="projects">
      <h2>Projects</h2>
      <Link to="/wikipedia-viewer">Wikipedia Project</Link>
    </div>
  );
};

export default Projects;
