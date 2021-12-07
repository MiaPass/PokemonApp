import React from "react";
import { useDispatch } from "react-redux";

import {
  orderByName,
  orderByHP,
  orderBySpeed,
  orderByAttack,
  orderByDefense,
} from "../../actions/actions";

export default function Sort() {
  const dispatch = useDispatch();

  /* -------------------- ORDER -------------------- */

  /* -------------- BY NAME -------------- */

  const handleSelectOrderByName = (e) => {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
  };

  /* -------------- BY HP -------------- */

  const handleSelectOrderByHP = (e) => {
    e.preventDefault();
    dispatch(orderByHP(e.target.value));
  };

  /* -------------- BY SPEED -------------- */

  const handleSelectOrderBySpeed = (e) => {
    e.preventDefault();
    dispatch(orderBySpeed(e.target.value));
  };

  /* -------------- BY ATTACK -------------- */

  const handleSelectOrderByAttack = (e) => {
    e.preventDefault();
    dispatch(orderByAttack(e.target.value));
  };

  /* -------------- BY DEFENSE -------------- */

  const handleSelectOrderByDefense = (e) => {
    e.preventDefault();
    dispatch(orderByDefense(e.target.value));
  };

  return (
    <div className="Sort">
      <label>
        {/* -------------- NAME -------------- */}
        <ul>
          <select onChange={(e) => handleSelectOrderByName(e)}>
            <option value="Default"> Name </option>
            <option value="Asc"> A - Z </option>
            <option value="Desc"> Z - A </option>
          </select>
        </ul>
        {/* -------------- HP -------------- */}
        <ul>
          <select onChange={(e) => handleSelectOrderByHP(e)}>
            <option value="Default"> HP </option>
            <option value="Highest to Lowest"> Highest </option>
            <option value="Lowest to Highest"> Lowest </option>
          </select>
        </ul>
        {/* -------------- SPEED -------------- */}
        <ul>
          <select onChange={(e) => handleSelectOrderBySpeed(e)}>
            <option value="Default"> Speed </option>
            <option value="Highest to Lowest"> Highest </option>
            <option value="Lowest to Highest"> Lowest </option>
          </select>
        </ul>
        {/* -------------- ATTACK -------------- */}
        <ul>
          <select onChange={(e) => handleSelectOrderByAttack(e)}>
            <option value="Default"> Attack </option>
            <option value="Highest to Lowest"> Highest </option>
            <option value="Lowest to Highest"> Lowest </option>
          </select>
        </ul>
        {/* -------------- DEFENSE -------------- */}
        <ul>
          <select onChange={(e) => handleSelectOrderByDefense(e)}>
            <option value="Default"> Defense </option>
            <option value="Highest to Lowest"> Highest </option>
            <option value="Lowest to Highest"> Lowest </option>
          </select>
        </ul>
      </label>
    </div>
  );
}
