import React from "react";
import { Field, reduxForm } from "redux-form";

class BookForm extends React.Component {
  renderField = ({ input, label, type, meta: { touched, error } }) => {
    return (
      <React.Fragment>
        <label>{label}</label>
        <input {...input} type={type} placeholder={label} className="form-control form-control-lg"/>
        {touched && error && <span>{error}</span>}
      </React.Fragment>
    );
  };

   renderTextArea = ({ input, label, type, meta: { touched, error } }) => {
    return (
      <React.Fragment>
        <label>{label}</label>
        <textarea
          id="description-input"
          className="form-control"
          {...input}
          type={type}
          placeholder={label}
          rows="10"
          cols="40"
        />
        {touched && error && <span>{error}</span>}
      </React.Fragment>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <div className="container pt-5">
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div className="form-group">
            <Field
              name="title"
              component={this.renderField}
              type="text"
              label="Title:"
            />
          </div>
          <div className="form-group">
            <Field
              name="author"
              component={this.renderField}
              type="text"
              label="Author:"
            />
          </div>
          <div className="form-group">
            <Field
              name="image"
              component={this.renderField}
              type="text"
              label="Image URL:"
            />
          </div>
          <div className="form-group">
            <Field
              name="desc"
              component={this.renderTextArea}
              type="text"
              label="Description:"
            />
          </div>
          <button className="btn btn-primary btn-lg">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "bookForm"
})(BookForm);
