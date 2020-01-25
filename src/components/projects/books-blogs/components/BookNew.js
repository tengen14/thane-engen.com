import React from "react";
import { connect } from "react-redux";
import { createBook } from "../actions";
import BookNav from "./BookNav";
import BookForm from "./BookForm";
import "../../../../styles/book-blog/main.scss";

class BookNew extends React.Component {
  componentWillUnmount() {
    window.location.reload();
  }

  onSubmit = formValues => {
    this.props.createBook(formValues);
  };

  render() {
    return (
      <div className="main">
        <BookNav />
        <BookForm
          type="add"
          onSubmit={this.onSubmit} 
        />
      </div>
    );
  }
}

export default connect(null, { createBook })(BookNew);
