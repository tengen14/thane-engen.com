import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div id="projects">
      <h2>Projects</h2>
      <Link to="/recipe-box" target="_blank">Recipe Box</Link>
      <Link to="/wikipedia-viewer" target="_blank">Wikipedia Article Searcher</Link>
      <Link to="/book-blog" target="_blank">Book Blog</Link>
    </div>
  );
};

export default Projects;
