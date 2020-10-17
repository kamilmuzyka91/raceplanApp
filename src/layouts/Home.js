import React, { Component } from "react";
import Navigation from "./Navigation";

class Home extends Component {
  render() {
    return (
      <>
        <header className="header">
          <Navigation />
        </header>
        <section className="open section">open</section>
        <section className="cta__section">aktualności regulamin lista</section>
        <section className="data__section">
          <article className="data__section__race__data">
            dane z edycji wyścigu
          </article>
          <article className="data__section__weather__data">
            weather API
          </article>
          <article className="data__section__drive__data">drive API</article>
        </section>
        <section className="footer">footer</section>
      </>
    );
  }
}

export default Home;
