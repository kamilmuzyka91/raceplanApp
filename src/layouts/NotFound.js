import React, { Component } from "react";
import Navigation from "./Navigation";

class NotFound extends Component {
  render() {
    return (
      <>
        <Navigation />
        <h1>Strona o podanym adresie nie istnieje, lepiej skorzystaj z nawigacji ;)</h1>
      </>
    );
  }
}
export default NotFound;
