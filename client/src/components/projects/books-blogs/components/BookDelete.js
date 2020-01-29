import React from "react";
import { connect } from "react-redux";
import { getBook, deleteBook } from "../actions";

class BookDelete extends React.Component {
  componentDidMount() {
    this.props.getBook(this.props.match.params.id);
    this.handleDelete();
  }

  handleDelete = () => {
    this.props.deleteBook(this.props.match.params.id);
  };

  render() {
    return null;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    book: state.books[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, { getBook, deleteBook })(BookDelete);
