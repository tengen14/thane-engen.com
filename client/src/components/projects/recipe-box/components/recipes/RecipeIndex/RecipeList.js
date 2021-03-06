import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getRecipe } from "../../../actions";
import "../../../../../../index";

class RecipeList extends React.Component {
  // List recipe titles (each links to separate show component)
  renderList = () => {
    return this.props.recipes.slice(0).reverse().map(recipe => {
      return (
        <Link to={`/recipe-box/recipes/${recipe._id}`} key={recipe._id}>
          <li onClick={() => this.props.getRecipe(recipe._id)}>
            {recipe.title}
          </li>
        </Link>
      );
    });
  };

  render() {
    const styleVanillaRecipeList = {
      borderBottomRightRadius: '0px',
      borderBottomLeftRadius: '0px',
    }

    // Style differs when no recipe is selected
    if (!this.props.selectedRecipe || this.props.selectedRecipe.ok) {
      return (
        <div id="recipe-list" className="ui container" style={styleVanillaRecipeList}>
          <ul>{this.renderList()}</ul>
        </div>
      );
    } else {
      return (
        <div id="recipe-list" className="ui container" style={{height: '100vh'}}>
          <ul>{this.renderList()}</ul>
        </div>
      );
    }
  }
}

export default connect(
  null,
  { getRecipe }
)(RecipeList);
