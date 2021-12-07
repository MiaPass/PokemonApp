import React from "react";
import { Link } from "react-router-dom";

import "./Card.css";

export default function Card(pokemon) {
  let types =
    pokemon.types !== undefined
      ? pokemon.types.map((type) => {
          if (type.name) {
            return type.name;
          } else {
            return type;
          }
        })
      : "Loading";

  return (
    <div className="totalCard">
      <div className="InfoCard">
        <div className="FrontCard">
          <ul>
            <h4>{pokemon.name !== undefined ? pokemon.name : "Not found"} </h4>
          </ul>

          <ul>
            <p>
              {pokemon.types !== undefined ? types.join(" - ") : "Not found"}
            </p>
          </ul>
        </div>

        <div className="BackCard">
          <ul>
            <img src={pokemon.image} alt="Not found Img" />
          </ul>

          <ul>
            <Link to={`/Detail/${pokemon.id}`}> I Choose You! </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
