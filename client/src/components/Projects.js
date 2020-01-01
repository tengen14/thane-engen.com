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
        <div className="d-flex justify-content-around">
          
          <div className="card">
            <img src={recipebox} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Recipe Box</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link
                to="/recipe-box"
                target="_blank"
                className="btn btn-primary"
              >
                Go somewhere
              </Link>
            </div>
          </div>

          <div className="card">
            <img src={wikipediaviewer} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Recipe Box</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link
                to="/wikipedia-viewer"
                target="_blank"
                className="btn btn-primary"
              >
                Go somewhere
              </Link>
            </div>
          </div>

          <div className="card">
            <img src={bookblog} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Book Blog</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="/book-blog" target="_blank" className="btn btn-primary">
                Go somewhere
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Projects;
