import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { getBook, editBook } from "../actions/";
import BookForm from "./BookForm";
import "../../../../styles/book-blog/main.scss";

class BookEdit extends React.Component {
  componentDidMount() {
    this.props.getBook(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editBook(this.props.match.params.id, formValues);
  };

  render() {
    return (
      <div className="main">
        <BookForm
          type="edit"
          initialValues={_.pick(this.props.book, "title", "author", "image", "desc")}
          onSubmit={this.onSubmit} 
        />
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
