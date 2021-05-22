import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import NavBar from "Components/Navigation/NavBar";
import Hero from "Sections/Hero/Hero";
import Achievements from "Sections/Achievements/Achievements";
import CommunitySection from "Sections/CommunitySection/CommunitySection";
import OffertSection from "Sections/OffertSection/OffertSection";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Hero />
          <Achievements />
          <CommunitySection />
          <OffertSection />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
