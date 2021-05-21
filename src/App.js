import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import NavBar from "Components/Navigation/NavBar";
import Hero from "Sections/Hero";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Hero />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
