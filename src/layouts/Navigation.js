import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCalendar,
  faAddressCard,
  faUserCircle,
  faSignInAlt,
  // faBiking,
} from "@fortawesome/free-solid-svg-icons";
// import logo from "../assets/logo.jpg";

const element__home = <FontAwesomeIcon icon={faHome} />;
const element__calendar = <FontAwesomeIcon icon={faCalendar} />;
const element__contact = <FontAwesomeIcon icon={faAddressCard} />;
const element__user = <FontAwesomeIcon icon={faUserCircle} />;
const element__signIn = <FontAwesomeIcon icon={faSignInAlt} />;

class Navigation extends Component {
  render() {
    return (
      <nav className="navigation__menu container">
        {/* <img className="navigation__menu__logo" src={logo} alt="logo image" /> */}

        <ul className="navigation__menu__list">
          <li className="navigation__menu__link">
            <NavLink className="navigation__menu__link-a" to="/">
              {element__home}
              Home
            </NavLink>
          </li>
          <li className="navigation__menu__link">
            <NavLink className="navigation__menu__link-a" to="/calendar">
              {element__calendar}
              Kalendarz
            </NavLink>
          </li>

          <li className="navigation__menu__link">
            <NavLink className="navigation__menu__link-a" to="/contact">
              {element__contact}
              Kontakt
            </NavLink>
          </li>
          <li className="navigation__menu__link">
            <NavLink
              className="navigation__menu__link-a"
              to="/userProfile/:userID"
            >
              {element__user}
              Profil
            </NavLink>
          </li>
          <li className="navigation__menu__link">
            <NavLink className="navigation__menu__link-a" to="/loginPage">
              {element__signIn}
              Zaloguj
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
