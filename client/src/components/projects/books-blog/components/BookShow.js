import React from "react";
import "../../../../styles/book-blog/main.scss";

const BookShow = () => {
  return (
    <div className="main">
      <div class="container d-flex flex-column align-items-center">
        <h1>blog.title </h1>
        <h2>By: blog.author </h2>
        {/* <img src="blog.image"> */}
        <p>blog.desc </p>
      </div>

      <div class="container d-flex justify-content-around" id="edit-and-delete">
        <a
          class="btn btn-warning btn-lg" /* href="/books/<%= blog._id %>/edit" */
        >
          Edit
        </a>

        {/* <form action="/books/<%= blog._id %>?_method=DELETE" method="POST"> */}
        <input class="btn btn-danger btn-lg" type="submit" value="Delete" />
        {/* </form> */}
      </div>
    </div>
  );
};

export default BookShow;
