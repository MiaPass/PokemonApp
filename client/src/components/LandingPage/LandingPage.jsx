import React from "react";
import { Link } from "react-router-dom";

import "./LandingPage.css";

import logo from "../media/logo.png";

export default function LandingPage() {
  return (
    <div className="containerLanding">
      {/* eslint-disable-next-line */}
      <iframe src="https://www.youtube.com/embed/rg6CiPI6h2g?autoplay=1&controls=1" />
      <hr />

      {/* Fuente: https://www.iteramos.com/pregunta/8575/como-hacer-una-linea-vertical-en-html */}

      <label>
        <ul>
          <a href={`/home`} className="link">
            <img src={logo} alt="" className="img" />
          </a>
        </ul>

        <ul>
          <button className="start">
            <Link className="link" title="start" to={`/home`}>
              Go!
            </Link>
          </button>
        </ul>
      </label>
    </div>
  );
}
