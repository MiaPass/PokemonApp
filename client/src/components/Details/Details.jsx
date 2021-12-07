import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getDetails, resetDetails, deletePokemon } from "../../actions/actions";

import "./Details.css";

export default function Details(props) {
  const dispatch = useDispatch();

  const { pokemonDetail } = useSelector((state) => state);

  const {
    match: { params },
  } = props;

  let id = params.id;

  let name = pokemonDetail.name;

  // console.log(pokemonDetail.types);

  let types =
    pokemonDetail.types !== undefined
      ? pokemonDetail.types.map((type) => {
          if (type.name) {
            return type.name;
          } else {
            return type;
          }
        })
      : "Loading";

  useEffect(() => {
    dispatch(getDetails(id));
  }, [dispatch, id]);

  return (
    <div className="containerDetails">
      <div className="infoDetails">
        <div className="imgDetails">
          <img src={pokemonDetail.image} alt="Not found Img" className="imgs" />
        </div>
        <div className="nameDetails">
          <h1>{pokemonDetail.name}</h1>
        </div>
        <div className="specificDetails">
          <h3>HP: {pokemonDetail.hp}</h3>
          <h3>Speed: {pokemonDetail.speed}</h3>
          <h3>Attack: {pokemonDetail.attack}</h3>
          <h3>Defense: {pokemonDetail.defense}</h3>
          <h3>Height: {pokemonDetail.height}</h3>
          <h3> Weight: {pokemonDetail.weight}</h3>
        </div>

        <div className="otherDetails">
          <div className="types">
            {id.length > 6 && typeof id === "string" ? (
              <h3>
                Type:
                {pokemonDetail.types !== undefined
                  ? " " + types.join(" - ")
                  : "None found"}
              </h3>
            ) : (
              <h3>
                Type:
                {pokemonDetail.types !== undefined
                  ? " " + pokemonDetail.types.join(" - ")
                  : "None found"}
              </h3>
            )}
            {id.length > 6 && typeof id === "string" ? (
              <button
                onClick={() => {
                  // console.log(name);
                  dispatch(deletePokemon(name));
                }}
              >
                Delete
              </button>
            ) : (
              <p />
            )}
          </div>
          <div className="buttonToHome">
            <Link onClick={(e) => dispatch(resetDetails(e))} to={`/home`}>
              <button>Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
