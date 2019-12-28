import React from "react";
import { connect } from "react-redux";
import { getBook, editBook } from "../actions/";

import "../../../../styles/book-blog/main.scss";

class BookEdit extends React.Component {
  componentDidMount() {
    this.props.getBook(this.props.match.params.id);
  }

  handleSubmit = formValues => {
    this.props.editBook(this.props.match.params.id, formValues);
  };

  render() {
    console.log(this.props);
    const book = this.props.book;

    return (
      <div className="main">
        <div className="container pt-5">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Title:</label>
              <input
                className="form-control form-control-lg"
                type="text"
                name={book.title}
                defaultValue={book.title}
              />
            </div>
            <div className="form-group">
              <label>Author:</label>
              <input
                className="form-control form-control-lg"
                type="text"
                name={book.author}
                defaultValue={book.author}
              />
            </div>
            <div className="form-group">
              <label>Image:</label>
              <input
                className="form-control form-control-lg"
                type="text"
                name={book.image}
                defaultValue={book.image}
              />
            </div>
            <div className="form-group">
              <label>Description:</label>
              <textarea
                id="description-input"
                className="form-control"
                type="text"
                name={book.desc}
                defaultValue={book.desc}
              />
            </div>
            <input
              className="btn btn-warning btn-lg"
              value="Update"
              type="submit"
            />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    book: state.books[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, { getBook, editBook })(BookEdit);
