import books from "../apis/books";
import history from "../../../../history";
import {
  GET_BOOK,
  GET_BOOKS,
  CREATE_BOOK,
  EDIT_BOOK,
  DELETE_BOOK
} from "./types";


// ACTIONS HANDLE API REQUESTS (RESTful CONVENTIONS)

export const getBooks = () => async dispatch => {
  const response = await books.get("/books");

  dispatch({ type: GET_BOOKS, payload: response.data });
};

export const getBook = id => async dispatch => {
  const response = await books.get(`/books/${id}`);

  dispatch({ type: GET_BOOK, payload: response.data });
};

export const createBook = formValues => async dispatch => {
  const response = await books.post("/books", { ...formValues });

  dispatch({ type: CREATE_BOOK, payload: response.data });
  history.push(`/book-blog/books/${response.data.id}`);
};

export const editBook = (id, formValues) => async dispatch => {
  const response = await books.patch(`/books/${id}`, formValues);

  dispatch({ type: EDIT_BOOK, payload: response.data });
  history.goBack();
};

export const deleteBook = id => async dispatch => {
  await books.delete(`/books/${id}`);

  dispatch({ type: DELETE_BOOK, payload: id });
  history.push("/book-blog");
};
