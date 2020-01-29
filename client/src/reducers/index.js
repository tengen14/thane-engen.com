import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import recipeReducer from "../components/projects/recipe-box/reducers/recipeReducer";
import bookReducer from "../components/projects/books-blogs/reducers/bookReducer";

// COMBINE RECIPE REDUCER AND FORM REDUCER
export default combineReducers({
    form: formReducer,
    recipes: recipeReducer,
    books: bookReducer
});