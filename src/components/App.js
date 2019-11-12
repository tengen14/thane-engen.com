import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import history from "../history";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;