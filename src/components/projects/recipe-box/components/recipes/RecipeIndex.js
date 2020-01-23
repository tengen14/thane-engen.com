import React from "react";
import { connect } from "react-redux";
import RecipeList from "./RecipeIndex/RecipeList";
import RecipeShow from "./RecipeIndex/RecipeShow";
import { getRecipes } from "../../actions";
import "../../../../../index";
import "../../../../../styles/recipe-box/recipe-box.scss";

class RecipeIndex extends React.Component {
  componentDidMount() {
    this.props.getRecipes();
  }

  render() {
    console.log(this.props.selectedRecipe);
    console.log(this.props.match);
    return (
      <div id="Recipe-Box">
        <h1>
          Recipe Box <i className="fas fa-hamburger"></i>
        </h1>
        <RecipeList
          recipes={this.props.recipes}
          selectedRecipe={this.props.selectedRecipe}
        />
        <RecipeShow selectedRecipe={this.props.selectedRecipe} />
      </div>
    );
  }
}

// Props defined from Reducer State Object and passed to component
const mapStateToProps = (state, ownProps) => {
  return {
    recipes: Object.values(state.recipes),
    selectedRecipe: state.recipes[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, { getRecipes })(RecipeIndex);
