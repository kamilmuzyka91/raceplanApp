import React, { Component } from "react";
import Navigation from "./Navigation";
import Open from "./Open";

class Home extends Component {
  render() {
    return (
      <>
        <header className="header">
          <Navigation />
        </header>
        <section className="open__section container"><Open/></section>
        <section className="cta__section  container">
          aktualności regulamin lista
        </section>
        <section className="data__section container">
          <article className="data__section__race__data container">
            dane z edycji wyścigu
          </article>
          <article className="data__section__weather__data container">
            weather API
          </article>
          <article className="data__section__drive__data container">
            drive API
          </article>
        </section>
        <section className="footer container">footer</section>
      </>
    );
  }
}

export default Home;
