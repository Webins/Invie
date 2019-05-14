import React from "react";
import ReactDOM from "react-dom";
import "./css/invie.css";
import "./css/animation.css";
import Invie from "./Invie";
import cheet from "cheet.js";
import logoPortada from "./images/invie.png";
import acustica from "./images/invie-acustica.png";
import clasica from "./images/invie-classic.png";
import { Provider } from "react-redux";
import { createStore } from "redux";
import easterA from "./images/easter-a.png";
import easterB from "./images/easter-b.png";
import logoPlatzi from "./images/platzi.png";

const initialState = {
  isAnimated: false,
  menu: [
    {
      href: "index.html",
      title: "Home"
    },
    {
      href: "#guitarras",
      title: "Guitarras"
    },
    {
      href: "precios.html",
      title: "Precios"
    }
  ],
  logoPortada: logoPortada,
  guitarras: [
    {
      image: acustica,
      alt: "Guitarra Invie Acustica",
      name: "Invie Acustica",
      features: [
        "Estilo vintage",
        "Madera pura",
        "incluye estuche invisible de aluminio"
      ]
    },
    {
      image: clasica,
      alt: "Guitarra Invie Clasica",
      name: "Invie Clásica",
      features: ["Estilo vintage", "Liviana", "Empieza tu camino como Rockstar"]
    }
  ]
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_PROPS": {
      const newProps = action.payload.props;
      return { ...state, ...newProps };
    }
    default:
      return state;
  }
}

const store = createStore(reducer, initialState);

const easter = {
  isAnimated: "is-animated",
  menu: [],
  logoPortada: logoPlatzi,
  guitarras: [
    {
      image: easterA,
      alt: "Guitarra Padre de familia",
      name: "Invie Familiar",
      features: [
        "Listo para copiar a los Simpson",
        "Aire puro",
        "Chistes malos "
      ]
    },
    {
      image: easterB,
      alt: "Guitarra Familiar",
      name: "Invie Clásica",
      features: ["Estilo vintage", "Liviana", "Empieza tu camino como Rockstar"]
    }
  ]
};

cheet("i n v i e", () => {
  store.dispatch({
    type: "UPDATE_PROPS",
    payload: {
      props: easter
    }
  });
});

cheet("b a c k", () => {
  store.dispatch({
    type: "UPDATE_PROPS",
    payload: {
      props: initialState
    }
  });
});

ReactDOM.render(
  <Provider store={store}>
    <Invie />
  </Provider>,
  document.getElementById("root")
);
