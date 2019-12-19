import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div id="projects">
      <h2>Projects</h2>
      <Link to="/wikipedia-viewer">Wikipedia Article Searcher</Link>
      <Link to="/recipe-box">Recipe Box</Link>
      <Link to="/book-blog">Book Blog</Link>
    </div>
  );
};

export default Projects;
