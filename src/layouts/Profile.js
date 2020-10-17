import React, { Component } from "react";

class Profile extends Component {
  render() {
    return (
      <h1>
        Info about User with ID:
        {this.props.match.params.userId}
      </h1>
    );
  }
}

export default Profile;
