import React from "react";

const About = () => {
  return (
    <div id="about">
      <div className="container">
        <h2>About</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm text-center">
            <img
              src="https://3.bp.blogspot.com/-ZL7fCrVhP0U/W-mww8IGnTI/AAAAAAAANAg/A8LwYP9AC5QTo4I37Y8ke4ggJJDlauZ7gCLcBGAs/s1600/nyala.jpg"
              alt="Nyala"
            />
          </div>
          <div className="col-sm">
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
