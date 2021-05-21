import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import NavBar from "Components/Navigation/NavBar";
import CTAButton from "Components/Button/CTAButton";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          {/* <CTAButton>Get started</CTAButton> */}
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
