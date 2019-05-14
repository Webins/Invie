import React, { Component } from "react";
import "./css/invie.css";
import Portada from "./components/Portada.jsx";
import Guitarra from "./components/Guitarra.jsx";
import Footer from "./components/Footer.jsx";

class App extends Component {
  render() {
    return (
      <section className="Invie">
        <Portada />
        <Guitarra />
        <Footer />
      </section>
    );
  }
}

export default App;
