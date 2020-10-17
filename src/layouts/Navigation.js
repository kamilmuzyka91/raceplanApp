import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <nav>
        <h1>LOGO</h1>
        <ul>
          <li>
            <NavLink activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/calendar">
              Kalendarz
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName="active" to="/contact">
              Kontakt
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/loginPage">
              Logowanie
            </NavLink>
            <li>
              <NavLink activeClassName="active" to="/userProfile/:userID">
                Profil
              </NavLink>
            </li>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
