import _ from "lodash";
import React from "react";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", subject: "", email: "", feedback: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div id="contact">
        <div className="container">
          <h2>Contact</h2>
          <form autoComplete="off">
            <div className="form-group">
              <input
                className="form-control"
                name="name"
                type="text"
                placeholder="Your Name"
                required
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                name="subject"
                type="text"
                placeholder="Subject"
                required
                value={this.state.subject}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                name="email"
                type="email"
                placeholder="Email Address"
                required
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                name="feedback"
                onChange={this.handleChange}
                placeholder="Message..."
                required
                value={this.state.feedback}
                style={{ width: "100%", height: "150px" }}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-lg"
              onClick={this.handleSubmit}
            >
              Submit
            </button>
          </form>
          <div id="github-linkedin">
            <a href="https://github.com/tengen14" target="_blank">
              <i
                className="fab fa-github-square"
                title="View My Github Profile!"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/thane-engen-b573bb149"
              target="_blank"
            >
              <i
                className="fab fa-linkedin"
                title="View My Linkedin Profile!"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }

  handleChange(event, state) {
    const value = event.target.value;
    this.setState({
      ...state,
      [event.target.feedback]: value,
      [event.target.name]: value,
      [event.target.subject]: value,
      [event.target.email]: value
    });
  }

  handleSubmit(event) {
    const templateId = "template_fo7tCjdD";

    this.sendFeedback(templateId, {
      from_name: this.state.name,
      _subject: this.state.subject,
      _email: this.state.email,
      message_html: this.state.feedback
    });
  }

  sendFeedback(templateId, variables) {
    const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    for (let field in this.state) {
      if (this.state[field] === "") {
        return console.error("Submission is Missing");
      }
    }

    if (this.state.email.match(emailValidation)) {
      console.log("Email is Valid");
    } else {
      return console.error("Email is Invalid");
    }

    window.emailjs.send("gmail", templateId, variables).then(response => {
      console.log("Email successfully sent!", response.status, response.text);
      alert("Email successfully sent!");
    });
    this.setState({ name: "", subject: "", email: "", feedback: "" });
  }
}

// values only cleared when all values are filled and sent
