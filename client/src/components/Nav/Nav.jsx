import React from "react";
import { useDispatch } from "react-redux";

import { defaultPage } from "../../actions/actions";

import Sort from "../Sort/Sort";
import Search from "../Search/Search";
import Filter from "../Filter/Filter";

import "./Nav.css";

export default function Nav() {
  const dispatch = useDispatch();

  /*-------------- DEFAULT --------------*/

  function handleClear(e) {
    e.preventDefault();
    dispatch(defaultPage());
  }

  return (
    <div className="nav">
      {/*-------------- ALWAYS --------------*/}

      <div className="icon">
        <li>
          <h2> Places </h2>
        </li>

        {/*-------------- SEARCH --------------*/}

        <li>
          <h2> Search </h2>
        </li>

        {/*-------------- SORT --------------*/}

        <li>
          <h2> Sort </h2>
        </li>

        {/*-------------- FILTER --------------*/}

        <li>
          <h2> Filter </h2>
        </li>
      </div>

      {/*-------------- HOVER --------------*/}

      <div className="text">
        {/*-------------- HOME --------------*/}

        <li>
          <div className="navCards1">
            {/*eslint-disable-next-line*/}
            <a href="#" onClick={(e) => handleClear(e)}>
              Home
            </a>
          </div>

          {/* -------------- CREATE -------------- */}

          <div className="navCards1">
            <a href="/Create"> Create Pokemon </a>
          </div>
        </li>

        {/*-------------- SEARCH --------------*/}

        <li>
          <div className="navCards2">
            <Search />
          </div>
        </li>

        {/*-------------- SORT --------------*/}

        <li>
          <div className="navCards2">
            <Sort />
          </div>
        </li>

        {/*-------------- FILTER --------------*/}

        <li>
          <div className="navCards2">
            <Filter />
          </div>
        </li>
      </div>
    </div>
  );
}
