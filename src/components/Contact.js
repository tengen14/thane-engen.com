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
        <h2>Contact</h2>
        <form>
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
          <div>
            <textarea
              name="feedback"
              onChange={this.handleChange}
              placeholder="Post some lorem ipsum here"
              required
              value={this.state.feedback}
              style={{ width: "100%", height: "150px" }}
            />
          </div>
          <input
            type="button"
            value="Submit"
            className="btn btn--submit"
            onClick={this.handleSubmit}
          />
        </form>
      </div>
    );
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({
      ...this.state,
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
    window.emailjs
      .send("gmail", templateId, variables)
      .then(res => {
        console.log("Email successfully sent!");
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  }
}
