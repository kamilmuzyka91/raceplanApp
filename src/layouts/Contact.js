import React, { Component } from "react";
import { Link } from "react-router-dom";
class Contact extends Component {
  render() {
    return (
      <div>
        <h1>Contact us at contact@example.com</h1>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default Contact;
