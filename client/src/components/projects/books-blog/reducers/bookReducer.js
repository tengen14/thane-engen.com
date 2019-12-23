import _ from "lodash";
import {
  GET_BOOKS,
  GET_BOOK,
  CREATE_BOOK,
  EDIT_BOOK,
  DELETE_BOOK
} from "../actions/types";

// ACTION PAYLOADS HANDLED IN REDUCER AND UPDATED IN STATE
export default (state = {}, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case GET_BOOK:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_BOOK:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_BOOK:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_BOOK:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
