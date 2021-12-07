import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllPokemons, getTypes, setPage } from "../../actions/actions";

import Cards from "../Cards/Cards";
import Nav from "../Nav/Nav";

import "./Home.css";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPokemons());
    dispatch(getTypes());
  }, [dispatch]);

  const { filteredPokemons, page } = useSelector((state) => state);

  /* -------------------- PAGINATION -------------------- */

  const itemXPage = 16;

  const handlePage = (num) => {
    if (page + num < 1 || page + num > filteredPokemons.length / itemXPage)
      return;
    dispatch(setPage(page + num));
  };

  return (
    <div className="container">
      {/* -------------- PAGES -------------- */}

      <div className="paginationAreaPt1">
        <label className="paginationPt1">
          <button
            onClick={() => {
              handlePage(-1);
            }}
          >
            ◄
          </button>

          <button>{page}</button>

          <button
            onClick={() => {
              handlePage(+1);
            }}
          >
            ►
          </button>
        </label>
      </div>

      {/* -------------- NAV -------------- */}

      <div className="navi">
        <Nav />
      </div>

      {/* -------------- GAMES -------------- */}

      <div className="cardsArea">
        {filteredPokemons ? (
          <Cards />
        ) : (
          <img
            src="https://igrygame.org/images/loading-game-en.gif"
            alt="LOADING"
          />
        )}
      </div>

      {/* -------------- PAGES -------------- */}

      <div className="paginationAreaPt2">
        <label className="paginationPt2">
          <button
            onClick={() => {
              handlePage(-1);
            }}
          >
            ◄
          </button>

          <button>{page}</button>

          <button
            onClick={() => {
              handlePage(+1);
            }}
          >
            ►
          </button>
        </label>
      </div>
    </div>
  );
}
