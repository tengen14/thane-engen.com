import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import WikiApp from "./projects/wikipedia-viewer/WikiApp";
import RecipeIndex from "./projects/recipe-box/client/src/components/recipes/RecipeIndex";
import RecipeCreate from "./projects/recipe-box/client/src/components/recipes/RecipeCreate";
import RecipeEdit from "./projects/recipe-box/client/src/components/recipes/RecipeEdit";
import RecipeDelete from "./projects/recipe-box/client/src/components/recipes/RecipeDelete";

import history from "../history";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/wikipedia-viewer" component={WikiApp} />
            <Route exact path="/recipe-box" component={RecipeIndex} />
            <Route exact path="/recipe-box/recipes/new" component={RecipeCreate} />
            <Route exact path="/recipe-box/recipes/edit/:id" component={RecipeEdit} />
            <Route exact path="/recipe-box/recipes/delete/:id" component={RecipeDelete} />
            <Route exact path="/recipe-box/recipes/:id" component={RecipeIndex} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
