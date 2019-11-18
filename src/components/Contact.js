import React from "react";
import _ from "lodash";

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
        <h2>Contact</h2>
        <form autocomplete="off">
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            name="subject"
            type="text"
            placeholder="Subject"
            required
            value={this.state.subject}
            onChange={this.handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            value={this.state.email}
            onChange={this.handleChange}
          />
          <textarea
            name="feedback"
            onChange={this.handleChange}
            placeholder="Message..."
            required
            value={this.state.feedback}
            style={{ width: "100%", height: "150px" }}
          />
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </form>
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
    
    // event.preventDefault();
    // this.setState({ name: "", subject: "", email: "", feedback: "" });

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
    });
  }
}

// values only cleared when all values are filled and sent
