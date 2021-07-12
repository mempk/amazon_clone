import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout/:randomid">
            <h1>Checkout Page</h1>
          </Route>
          <Route path="/login">
            <h1>Login page</h1>
          </Route>
          {/* Default goes at the end in the router */}
          <Route path="/">
            <Header />
            <h1>Home Page</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
