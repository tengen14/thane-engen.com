import React from "react";
import { Link } from "react-router-dom";
import "../../../../styles/book-blog/landing.scss";

const BookLanding = () => {
  return (
    <div id="landing">
      <div>
        <h1>Thane's Book Blog</h1>
        <Link to="/book-blog/books">
          <button
            type="button"
            className="btn btn-primary btn-lg btn-block my-0"
          >
            Enter Site
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookLanding;
