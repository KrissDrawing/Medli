import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import NavBar from "Components/Navigation/NavBar";
import Hero from "Sections/Hero/Hero";
import Achievements from "Sections/Achievements/Achievements";
import Opinions from "Sections/Opinions/Opinions";
import Offert from "Sections/Offert/Offert";
import Footer from "Sections/Footer/Footer";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Hero />
          <Achievements />
          <Opinions />
          <Offert />
          <Footer />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
