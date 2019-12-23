import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import recipeReducer from "./recipeReducer";
import bookReducer from "../../../../components/projects/book-blog/reducers/bookReducer";

// COMBINE RECIPE REDUCER AND FORM REDUCER
export default combineReducers({
    form: formReducer,
    recipes: recipeReducer,
    books: bookReducer
});