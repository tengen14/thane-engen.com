import React from "react";
import { connect } from "react-redux";
import { createBook } from "../actions";
import "../../../../styles/book-blog/main.scss";

class BookNew extends React.Component {
  
  handleSubmit = formValues => {
    this.props.createBook(formValues);
  }

  render() {
    console.log(this.props);
    return (
      <div className="main">
        <div className="container pt-5">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Title:</label>
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="title"
              />
            </div>
            <div className="form-group">
              <label>Author:</label>
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="author"
              />
            </div>
            <div className="form-group">
              <label>Image:</label>
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="image url"
              />
            </div>
            <div className="form-group">
              <label>Description:</label>
              <textarea
                className="form-control form-control-lg"
                placeholder="add a description..."
              />
            </div>
            <input className="btn btn-primary btn-lg" type="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { createBook }
)(BookNew);
