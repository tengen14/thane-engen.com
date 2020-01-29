import recipes from "../apis/recipes";
import history from "../../../../history";
import {
  GET_RECIPE,
  GET_RECIPES,
  CREATE_RECIPE,
  EDIT_RECIPE,
  DELETE_RECIPE
} from "./types";


// ACTIONS HANDLE API REQUESTS (RESTful CONVENTIONS)

export const getRecipes = () => async dispatch => {
  const response = await recipes.get("/recipes");

  dispatch({ type: GET_RECIPES, payload: response.data });
};

export const getRecipe = _id => async dispatch => {
  const response = await recipes.get(`/recipes/${_id}`);

  dispatch({ type: GET_RECIPE, payload: response.data });
};

export const createRecipe = formValues => async dispatch => {
  const response = await recipes.post("/recipes", { ...formValues });

  dispatch({ type: CREATE_RECIPE, payload: response.data });
  history.push(`/recipe-box`);
};

export const editRecipe = (_id, formValues) => async dispatch => {
  const response = await recipes.patch(`/recipes/${_id}`, formValues);

  dispatch({ type: EDIT_RECIPE, payload: response.data });
  history.goBack();
};

export const deleteRecipe = _id => async dispatch => {
  await recipes.delete(`/recipes/${_id}`);

  dispatch({ type: DELETE_RECIPE, payload: _id });
  history.push("/recipe-box");
};
