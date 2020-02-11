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
              <br />
              <li>Some Technologies I Enjoy Using Include:</li>
              <br />
              <ul>
                <li>HTML5, JSX</li>
                <li>CSS3 (Flexbox & Grid), SASS, Bootstrap, Semantic UI </li>
                <li>JavaScript (ES6), ReactJS, React/Redux</li>
                <li>Node (Express), MongoDB, Mongoose</li>
                <li>Axios, Fetch API</li>
                <li>Git/Github, Npm</li>
                <li>NGINX</li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
