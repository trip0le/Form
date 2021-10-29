import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Form from "./Form"
import Questions from "./Questions";

const Routing = () => {
  return (
    <div>
      <Router>
        <Route exact path="/">
          <Form />
        </Route>
        <Route exact path="/questions">
          <Questions />
        </Route>
      </Router>
    </div>
  );
};

export default Routing;
