import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

class Contact extends Component {
  render() {
    return (
      <>
        <Navigation />
        <h1>Contact us at contact@example.com</h1>
        <Link to="/">Home</Link>
      </>
    );
  }
}

export default Contact;
