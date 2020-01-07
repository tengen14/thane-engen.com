import React from "react";
import profilepic from "../imgs/profile-pic.jpg";

const About = () => {
  return (
    <div id="about" className="container">
      <h2>About</h2>
      <div className="container">
        <div className="row">
          <div className="col-sm text-center">
            <img
              src={profilepic}
              alt="Profile Pic"
            />
          </div>
          <div className="col-sm d-flex align-items-center">
            <ul>
              <li>
                I design, create, and manage quick and responsive web
                applications with user experience in mind. When I'm not coding
                or learning a new technology, I enjoy rock climbing and studying
                history.
              </li>
              <br />
              <li>Some Technologies I Enjoy Using Include:</li>
              <ul>
                <li>HTML5</li>
                <li>CSS3 (Flexbox & Grid), Sass, Bootstrap, Semantic UI </li>
                <li>JavaScript, ES6, jQuery, ReactJS, React/Redux</li>
                <li>Node (Express), MongoDB, Mongoose</li>
                <li>Git/Github, Npm</li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
