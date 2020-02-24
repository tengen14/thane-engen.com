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
              <Link
                to="/recipe-box"
                target="_blank"
                rel="noopener noreferrer"
                title="View Project in Browser"
              >
                <img
                  src={recipebox}
                  alt="Recipe Box"
                  className="card-img-top"
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title">Recipe Box</h5>
                <p className="card-text">
                  A list of recipes that you can view, add to, edit, or delete
                </p>
                <div className="recipe-buttons d-flex justify-content-around">
                  <Link
                    to="/recipe-box"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success"
                    title="See in Browser"
                  >
                    View Project
                  </Link>
                  <a
                    href="https://github.com/tengen14/Recipe-Box"
                    target="_blank"
                    rel="noopener noreferrer"
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
              <Link
                to="/wikipedia-viewer"
                target="_blank"
                rel="noopener noreferrer"
                title="View Project in Browser"
              >
                <img
                  src={wikipediaviewer}
                  alt="Wikipedia Viewer"
                  className="card-img-top"
                />
              </Link>
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
                    rel="noopener noreferrer"
                    className="btn btn-success"
                    title="See in Browser"
                  >
                    View Project
                  </Link>
                  <a
                    href="https://github.com/tengen14/Wikipedia-Viewer"
                    target="_blank"
                    rel="noopener noreferrer"
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
              <Link
                to="/book-blog"
                target="_blank"
                rel="noopener noreferrer"
                title="View Project in Browser"
              >
                <img src={bookblog} alt="Book Blog" className="card-img-top" />
              </Link>
              <div className="card-body">
                <h5 className="card-title">Book Blog</h5>
                <p className="card-text">
                  A pseudo book blog with CRUD functionality
                </p>
                <div className="blog-buttons d-flex justify-content-around">
                  <Link
                    to="/book-blog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success"
                    title="See in Browser"
                  >
                    View Project
                  </Link>
                  <a
                    href="https://github.com/tengen14/Book-Blog"
                    target="_blank"
                    rel="noopener noreferrer"
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
              <Link
                to="/wikipedia-viewer"
                target="_blank"
                rel="noopener noreferrer"
                title="View Project in Browser"
              >
                <img
                  src={wikipediaviewer}
                  alt="Wikipedia Viewer"
                  className="card-img-top"
                />
              </Link>
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
                    rel="noopener noreferrer"
                    className="btn btn-success"
                    title="See in Browser"
                  >
                    View Project
                  </Link>
                  <a
                    href="https://github.com/tengen14/Wikipedia-Viewer"
                    target="_blank"
                    rel="noopener noreferrer"
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
              <Link
                to="/book-blog"
                target="_blank"
                rel="noopener noreferrer"
                title="View Project in Browser"
              >
                <img src={bookblog} alt="Book Blog" className="card-img-top" />
              </Link>
              <div className="card-body">
                <h5 className="card-title">Book Blog</h5>
                <p className="card-text">
                  A pseudo book blog with CRUD functionality
                </p>
                <div className="blog-buttons d-flex justify-content-around">
                  <Link
                    to="/book-blog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success"
                    title="See in Browser"
                  >
                    View Project
                  </Link>
                  <a
                    href="https://github.com/tengen14/Book-Blog"
                    target="_blank"
                    rel="noopener noreferrer"
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
