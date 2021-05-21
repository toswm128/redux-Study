import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../routes/Home";
import Todo from "../routes/Todo";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/todo" component={Todo} />
      </Switch>
    </Router>
  );
}

export default App;
