import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ToDoPage from "../Pages/ToDoPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/todo" component={ToDoPage} />
      </Switch>
    </Router>
  );
}

export default App;
