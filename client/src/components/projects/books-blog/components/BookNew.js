import React from "react";
import "../../../../styles/book-blog/main.scss";

const BookNew = () => {
  return (
    <div className="main">
      <div class="container pt-5">
        <form /* action="/books" method="POST" */>
          <div class="form-group">
            <label>Title:</label>
            <input
              class="form-control form-control-lg"
              type="text"
              /* name="blog[title]" */ placeholder="title"
            />
          </div>
          <div class="form-group">
            <label>Author:</label>
            <input
              class="form-control form-control-lg"
              type="text"
              /* name="blog[author]" */ placeholder="author"
            />
          </div>
          <div class="form-group">
            <label>Image:</label>
            <input
              class="form-control form-control-lg"
              type="text"
              /* name="blog[image]" */ placeholder="image url"
            />
          </div>
          <div class="form-group">
            <label>Description:</label>
            <textarea
              class="form-control form-control-lg"
              placeholder="add a description..." /* name="blog[desc]" */
            />
          </div>
          <input class="btn btn-primary btn-lg" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default BookNew;
