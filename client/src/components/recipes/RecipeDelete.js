import React from "react";
import { connect } from "react-redux";
import { getRecipe, deleteRecipe } from "../../actions";
import history from "../../history";

class RecipeDelete extends React.Component {
  componentDidMount() {
    this.props.getRecipe(this.props.match.params.id);
    this.confirmDelete();
  }

  confirmDelete = () => {
    // Prompt user if they would like to delete 'selected recipe'
    let choice = window.confirm(
      `Are you sure you wish to delete "${this.props.selectedRecipe.title}" from the Recipe Box?`
    );
    // Execute 'delete' action if true or 'go back' if false
    if (choice === true) {
      this.props.deleteRecipe(this.props.match.params.id);
    } else {
      history.goBack();
    }
  };

  // Nothing new is rendered
  render() {
    return null;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { selectedRecipe: state.recipes[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { getRecipe, deleteRecipe })(
  RecipeDelete
);
