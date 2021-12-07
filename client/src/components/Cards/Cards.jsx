import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";

import "./Cards.css";

export default function Cards() {
  const { filteredPokemons, page } = useSelector((state) => state);
  const itemXPage = 16;
  // console.log(filteredPokemons.id);

  return (
    <div className="Cards">
      {filteredPokemons.length > 1 ? (
        filteredPokemons
          .slice(itemXPage * page - itemXPage, itemXPage * page)
          .map((pok) => {
            return (
              <Card
                key={pok.id}
                id={pok.id}
                name={pok.name}
                image={pok.image}
                types={pok.types}
              />
            );
          })
      ) : filteredPokemons.length <= 0 ? (
        <h2>Pokemon not found</h2>
      ) : (
        filteredPokemons.map((pok) => {
          return (
            <Card
              key={pok.id}
              id={pok.id}
              name={pok.name}
              image={pok.image}
              types={pok.types}
            />
          );
        })
      )}
    </div>
  );
}
