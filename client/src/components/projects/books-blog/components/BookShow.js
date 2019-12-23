import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getBook, deleteBook } from "../actions";
import "../../../../styles/book-blog/main.scss";

class BookShow extends React.Component {
  componentDidMount() {
    this.props.getBook(this.props.match.params.id);
  }

  handleClick = () => {
    console.log(this.props);
    this.props.deleteBook(this.props.match.params.id);
  }

  render() {
    console.log(this.props.book);
    return (
      <div className="main">
        <div className="container d-flex flex-column align-items-center">
          <h1>{this.props.book.title}</h1>
          <h2>{this.props.book.author}</h2>
          <img src={this.props.book.image} />
          <p>{this.props.book.desc}</p>
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
