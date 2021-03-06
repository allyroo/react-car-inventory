import React from "react";
import ReactDOM from "react-dom";
import { Home, Dashboard, SignIn } from "./components"; //NEW_ADDITION
import reportWebVitals from "./reportWebVitals";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home title={"Real Fake Cars"} />
        </Route>
        <Route path="/dashboard">
          <Dashboard></Dashboard>
        </Route>

        <Route path="/signin">
          <SignIn></SignIn>
        </Route>
      </Switch>
    </Router>
    {/* NEW_ADDITION*/}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
