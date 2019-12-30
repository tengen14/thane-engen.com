import React from "react";
import { Link } from "react-router-dom";

import recipebox from "../imgs/projects/recipe-box.png";
import wikipediaviewer from "../imgs/projects/wikipedia-viewer.png";
import bookblog from "../imgs/projects/book-blog.png";

const Projects = () => {
  return (
    <div id="projects">
      <div className="container">
        <h2>Projects</h2>
        <Link to="/recipe-box" target="_blank">
          <img src={recipebox} />
        </Link>
        <Link to="/wikipedia-viewer" target="_blank">
          <img src={wikipediaviewer} />
        </Link>
        <Link to="/book-blog" target="_blank">
          <img src={bookblog} />
        </Link>
      </div>
    </div>
  );
};

export default Projects;
