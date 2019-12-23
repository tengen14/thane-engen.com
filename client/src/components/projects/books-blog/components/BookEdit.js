import React from "react";

const BookEdit = () => {
  return (
    <div>
      <div class="container pt-5">
        <form /* action="/books/<%= blog._id %>?_method=PUT" method="POST" */>
          <div class="form-group">
            <label>Title:</label>
            <input
              class="form-control form-control-lg"
              type="text" /* name="blog[title]" value="<%= blog.title %>" */
            />
          </div>
          <div class="form-group">
            <label>Author:</label>
            <input
              class="form-control form-control-lg"
              type="text" /* name="blog[author]" value="<%= blog.author %>" */
            />
          </div>
          <div class="form-group">
            <label>Image:</label>
            <input
              class="form-control form-control-lg"
              type="text" /* name="blog[image]" value="<%= blog.image %>" */
            />
          </div>
          <div class="form-group">
            <label>Description:</label>
            <textarea
              id="description-input"
              class="form-control"
              type="text" /* name="blog[desc]" value="<%= blog.desc %>" */
            >
              blog.desc
            </textarea>
          </div>
          <input class="btn btn-warning btn-lg" value="Update" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default BookEdit;
