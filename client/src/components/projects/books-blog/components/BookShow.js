import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getBook, deleteBook } from "../actions";
import BookNav from "./BookNav";
import "../../../../styles/book-blog/main.scss";

class BookShow extends React.Component {
  componentDidMount() {
    this.props.getBook(this.props.match.params.id);
  }

  handleClick = () => {
    this.props.deleteBook(this.props.match.params.id);
  }

  render() {
    const book = this.props.book;
    return (
      <div className="main">
        <BookNav />
        <div className="container d-flex flex-column align-items-center">
          <h1>{book.title}</h1>
          <h2>By: {book.author}</h2>
          <img src={book.image} />
          <p>{book.desc}</p>
        </div>

        <div
          className="container d-flex justify-content-around"
          id="edit-and-delete"
        >
          <Link
            className="btn btn-warning btn-lg"
            to={`edit/${this.props.book.id}`}
          >
            Edit
          </Link>

          <button onClick={this.handleClick} className="btn btn-danger btn-lg">
            Delete
          </button>
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

export default connect(mapStateToProps, { getBook, deleteBook })(BookShow);
