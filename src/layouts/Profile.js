import React, { Component } from "react";
import Navigation from "./Navigation";

class Profile extends Component {
  render() {
    return (
      <>
        <Navigation />
        <h1>
          Info about User with ID:
          {this.props.match.params.userId}
        </h1>
      </>
    );
  }
}

export default Profile;
