import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getBooks } from "../actions";
import BookNav from "./BookNav";

import "../../../../styles/book-blog/main.scss";

class BookList extends React.Component {
  componentDidMount() {
    this.props.getBooks();
  }

  renderList = () => {
    return this.props.books.slice(0).reverse().map(book => {
      return (
        <div key={book.id}>
          <div className="container d-flex flex-column align-items-center">
            <h1>{book.title}</h1>
            <h2>By: {book.author}</h2>

            <img src={book.image} />

            <Link className="btn btn-info" to={`books/${book.id}`}>
              Click for more info...
            </Link>
          </div>
          <hr />
        </div>
      );
    });
  };

  render() {
    console.log(this.props.books);
    return (
      <div className="main">
        <BookNav />
        <div>
          <div>{this.renderList()}</div>
          <br />
          <Link to="books/new" className="btn btn-primary" id="new-book">
            Add a new book!
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: Object.values(state.books)
  };
};

export default connect(mapStateToProps, { getBooks })(BookList);
