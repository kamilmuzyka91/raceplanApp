import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import "./App.scss";
import Home from "./layouts/Home";
import Profile from "./layouts/Profile";
import Calendar from "./layouts/Calendar";
import Contact from "./layouts/Contact";
import Login from "./layouts/Login";
import NotFound from "./layouts/NotFound";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/userProfile/:userID" component={Profile} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/contact" component={Contact} />
          <Route path="/loginPage" component={Login} />
          <Route path="*" component={NotFound} />
        </Switch>
      </HashRouter>
    );
  }
}
export default App;
