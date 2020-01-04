import React from "react";
import { Link } from "react-router-dom";

import recipebox from "../imgs/projects/recipe-box.png";
import wikipediaviewer from "../imgs/projects/wikipedia-viewer.png";
import bookblog from "../imgs/projects/book-blog.png";

const Projects = () => {
  return (
    <div id="projects" className="container">
      <h2>Projects</h2>
      <div className="container">
        <div className="row">
          {/* Recipe Box */}
          <div className="col-md-4 col-sm-6 col-6">
            <div className="card">
              <img src={recipebox} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Recipe Box</h5>
                <p className="card-text">
                  A list of recipes that you can view, add to, edit, or delete
                </p>
                <div className="recipe-buttons d-flex justify-content-around">
                  <Link
                    to="/recipe-box"
                    target="_blank"
                    className="btn btn-success"
                    title="See in Browser"
                  >
                    View Project
                  </Link>
                  <a
                    href="https://github.com/tengen14/Recipe-Box"
                    target="_blank"
                    className="btn btn-danger"
                    title="See Source Code and Description on Github"
                  >
                    <span>Learn More</span>
                    <i className="fab fa-github-square" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Wikipedia */}
          <div className="col-md-4 col-sm-6 d-sm-block d-none">
            <div className="card">
              <img src={wikipediaviewer} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Wikipedia Viewer</h5>
                <p className="card-text">
                  A basic search bar used to find articles using the Wikipedia
                  API
                </p>
                <div className="wikipedia-buttons d-flex justify-content-around">
                  <Link
                    to="/wikipedia-viewer"
                    target="_blank"
                    className="btn btn-success"
                    title="See in Browser"
                  >
                    View Project
                  </Link>
                  <a
                    href="https://github.com/tengen14/Wikipedia-Viewer"
                    target="_blank"
                    className="btn btn-danger"
                    title="See Source Code and Description on Github"
                  >
                    <span>Learn More</span>
                    <i className="fab fa-github-square" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Book Blog */}
          <div className="col-md-4 d-md-block d-none">
            <div className="card">
              <img src={bookblog} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Book Blog</h5>
                <p className="card-text">
                  A pseudo book blog with CRUD functionality
                </p>
                <div className="blog-buttons d-flex justify-content-around">
                  <Link
                    to="/book-blog"
                    target="_blank"
                    className="btn btn-success"
                    title="See in Browser"
                  >
                    View Project
                  </Link>
                  <a
                    href="https://github.com/tengen14/Book-Blog"
                    target="_blank"
                    className="btn btn-danger"
                    title="See Source Code and Description on Github"
                  >
                    <span>Learn More</span>
                    <i className="fab fa-github-square" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wikipedia */}
        <div className="row">
          <div className="col-6 d-sm-none d-block">
            <div className="card">
              <img src={wikipediaviewer} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Wikipedia Viewer</h5>
                <p className="card-text">
                  A basic search bar used to find articles using the Wikipedia
                  API
                </p>
                <div className="wikipedia-buttons d-flex justify-content-around">
                  <Link
                    to="/wikipedia-viewer"
                    target="_blank"
                    className="btn btn-success"
                    title="See in Browser"
                  >
                    View Project
                  </Link>
                  <a
                    href="https://github.com/tengen14/Wikipedia-Viewer"
                    target="_blank"
                    className="btn btn-danger"
                    title="See Source Code and Description on Github"
                  >
                    <span>Learn More</span>
                    <i className="fab fa-github-square" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Book Blog */}
        <div className="row">
          <div className="d-md-none col-sm-6 col-6">
            <div className="card">
              <img src={bookblog} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Book Blog</h5>
                <p className="card-text">
                  A pseudo book blog with CRUD functionality
                </p>
                <div className="blog-buttons d-flex justify-content-around">
                  <Link
                    to="/book-blog"
                    target="_blank"
                    className="btn btn-success"
                    title="See in Browser"
                  >
                    View Project
                  </Link>
                  <a
                    href="https://github.com/tengen14/Book-Blog"
                    target="_blank"
                    className="btn btn-danger"
                    title="See Source Code and Description on Github"
                  >
                    <span>Learn More</span>
                    <i className="fab fa-github-square" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
