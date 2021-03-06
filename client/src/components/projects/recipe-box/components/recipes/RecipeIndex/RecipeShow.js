import React from "react";
import { Link } from "react-router-dom";
import "../../../../../../index";

class RecipeShow extends React.Component {
  // Route to RecipeCreate.js component
  newRecipe = () => {
    return (
      <h2 id="recipe-add">
        <Link to="/recipe-box/recipes/new" title="Add Recipe">
          <i className="fas fa-plus"></i>
        </Link>
      </h2>
    );
  };

  render() {
    // Object that will contain data of selectedRecipe
    const valuesObject = {};

    if (!this.props.selectedRecipe || this.props.selectedRecipe.ok) {
      // Style differs when no recipe is selected (show component is nonexistent besides 'create recipe route')
      const styleVanillaAddRecipe = {
        borderBottom: "2px solid black",
        borderRight: "2px solid black",
        borderLeft: "2px solid black",
        borderBottomRightRadius: "10.1px",
        borderBottomLeftRadius: "10.1px"
      };
      return (
        <div className="ui container" style={styleVanillaAddRecipe}>
          {this.newRecipe()}
        </div>
      );

      // Handle return statement given on condition of selectedRecipe
    } else {
      // set title key value for valuesObject
      valuesObject.title = (
        <React.Fragment>{this.props.selectedRecipe.title}</React.Fragment>
      );
      // set ingredients key values for valuesObject
      valuesObject.ingredients = this.props.selectedRecipe.ingredients.map(
        (ingredient, i) => {
          return <li key={i}>{ingredient}</li>;
        }
      );
      // set directions key values for valuesObject
      valuesObject.directions = this.props.selectedRecipe.directions.map(
        (direction, i) => {
          return <li key={i}>{direction}</li>;
        }
      );

      return (
        <div id="recipe-desc" className="ui container">
          <div id="recipe-title">
            <h2>{valuesObject.title}</h2>
            <div id="title-buttons">
              {/* Route to RecipeEdit component */}
              <Link
                to={`/recipe-box/recipes/edit/${this.props.selectedRecipe._id}`}
                title="Edit Recipe"
              >
                <i className="fas fa-edit"></i>
              </Link>
              {/* Route to RecipeDelete component */}
              <Link
                to={`/recipe-box/recipes/delete/${this.props.selectedRecipe._id}`}
                title="Delete Recipe"
              >
                <i className="far fa-trash-alt"></i>
              </Link>
            </div>
          </div>
          <div id="recipe-body">
            <ul>{valuesObject.ingredients}</ul>
            <ol>{valuesObject.directions}</ol>
          </div>
          {this.newRecipe()}
        </div>
      );
    }
  }
}

export default RecipeShow;
