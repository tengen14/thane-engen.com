import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { editBook } from "../actions/";

class BookEdit extends React.Component {
  render() {
    console.log(this.state);
    return (
      <div>
        <div className="container pt-5">
          <form /* action="/books/<%= blog._id %>?_method=PUT" method="POST" */>
            <div className="form-group">
              <label>Title:</label>
              <input
                className="form-control form-control-lg"
                type="text" /* name="blog[title]" value="<%= blog.title %>" */
              />
            </div>
            <div className="form-group">
              <label>Author:</label>
              <input
                className="form-control form-control-lg"
                type="text" /* name="blog[author]" value="<%= blog.author %>" */
              />
            </div>
            <div className="form-group">
              <label>Image:</label>
              <input
                className="form-control form-control-lg"
                type="text" /* name="blog[image]" value="<%= blog.image %>" */
              />
            </div>
            <div className="form-group">
              <label>Description:</label>
              <textarea
                id="description-input"
                className="form-control"
                type="text" /* name="blog[desc]" value="<%= blog.desc %>" */
              >
                blog.desc
              </textarea>
            </div>
            <input
              className="btn btn-warning btn-lg"
              value="Update"
              type="submit"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, { editBook })(BookEdit);