import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <nav className="navigation__menu container">
        <div className="navigation__menu__logo">Logo</div>
        <ul className="navigation__menu__list">
          <li className="navigation__menu__link">
            <NavLink className="navigation__menu__link-a" to="/">
              Home
            </NavLink>
          </li>
          <li className="navigation__menu__link">
            <NavLink className="active" to="/calendar">
              Kalendarz
            </NavLink>
          </li>

          <li className="navigation__menu__link">
            <NavLink className="active" to="/contact">
              Kontakt
            </NavLink>
          </li>
          <li className="navigation__menu__link">
            <NavLink className="active" to="/userProfile/:userID">
              Profil
            </NavLink>
          </li>
          <li className="navigation__menu__link">
            <NavLink className="active" to="/loginPage">
              Zaloguj
            </NavLink>
          </li>

        </ul>
      </nav>
    );
  }
}

export default Navigation;
