import React from "react";
import { connect } from "react-redux";
import { createBook } from "../actions";
import BookForm from "./BookForm";
import "../../../../styles/book-blog/main.scss";

class BookNew extends React.Component {
  onSubmit = formValues => {
    this.props.createBook(formValues);
  };

  render() {
    return (
      <div className="main">
        <BookForm
          onSubmit={this.onSubmit} 
        />
      </div>
    );
  }
}

export default connect(null, { createBook })(BookNew);
