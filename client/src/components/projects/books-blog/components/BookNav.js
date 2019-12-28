import React from "react";
import { Link } from "react-router-dom";

const BookNav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/book-blog" className="navbar-brand">
          <i className="fas fa-book-open" />
        </Link>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/book-blog/books" className="nav-link">
              Book List <span className="sr-only">(current)</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BookNav;
