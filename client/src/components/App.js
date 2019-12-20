import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import HomePage from "./HomePage";

import WikiApp from "./projects/wikipedia-viewer/WikiApp";

import RecipeIndex from "./projects/recipe-box/components/recipes/RecipeIndex";
import RecipeCreate from "./projects/recipe-box/components/recipes/RecipeCreate";
import RecipeEdit from "./projects/recipe-box/components/recipes/RecipeEdit";
import RecipeDelete from "./projects/recipe-box/components/recipes/RecipeDelete";

import BookLanding from "./projects/book-blog/views/BookLanding";
import BookList from "./projects/book-blog/views/BookList";
import BookShow from "./projects/book-blog/views/BookShow";
import BookNew from "./projects/book-blog/views/BookNew";
import BookEdit from "./projects/book-blog/views/BookEdit";

import history from "../history";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Switch>

            HOME ROUTE(S)
            <Route exact path="/" component={HomePage} />

            WIKIPEDIA PROJECT ROUTE(S)
            <Route exact path="/wikipedia-viewer" component={WikiApp} />

            RECIPE BOX PROJECT ROUTE(S)
            <Route exact path="/recipe-box" component={RecipeIndex} />
            <Route exact path="/recipe-box/recipes/new" component={RecipeCreate} />
            <Route exact path="/recipe-box/recipes/edit/:id" component={RecipeEdit} />
            <Route exact path="/recipe-box/recipes/delete/:id" component={RecipeDelete} />
            <Route exact path="/recipe-box/recipes/:id" component={RecipeIndex} />

            BOOK BLOG PROJECT ROUTE(S)
            <Route exact path="/book-blog" component={BookLanding} />
            <Route exact path="/book-blog/books/new" component={BookNew} />
            <Route exact path="/book-blog/books/edit/:id" component={BookEdit} />
            <Route exact path="/book-blog/books" component={BookList} />
            <Route exact path="/book-blog/books/:id" component={BookShow} />

          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
