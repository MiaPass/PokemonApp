import axios from "axios";

import {
  GET_ALL_POKEMONS,
  GET_DETAILS,
  GET_TYPES,
  SEARCH,
  SET_DEFAULT,
  RESET_DETAILS,
  ORDER_BY_NAME,
  ORDER_BY_HP,
  ORDER_BY_SPEED,
  ORDER_BY_ATTACK,
  ORDER_BY_DEFENSE,
  FILTER_BY_OWNED,
  FILTER_BY_TYPE,
  SET_PAGE,
  POST_POKEMON,
  DELETE_POKEMON,
} from "../Constans";

/*-------------- GET --------------*/

export function getAllPokemons() {
  return function (dispatch) {
    return axios
      .get(`http://localhost:3001/pokemon/all`)
      .then((res) => {
        dispatch({ type: GET_ALL_POKEMONS, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        alert("Ups! Something went wrong...");
      });
  };
}

export function getDetails(id) {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/pokemon/id/${id}`)
      .then((res) => {
        dispatch({ type: GET_DETAILS, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        alert("Ups! Something went wrong...");
      });
  };
}

export function getTypes() {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/type`)
      .then((res) => {
        dispatch({ type: GET_TYPES, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        alert("Ups! Something went wrong...");
      });
  };
}

/*-------------- SEARCH --------------*/

export function searchByName(name) {
  return function (dispatch) {
    return axios
      .get(`http://localhost:3001/pokemon/name/${name}`)
      .then((res) => {
        dispatch({ type: SEARCH, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        alert("Ups! Something went wrong...");
      });
  };
}

/*-------------- DEFAULT --------------*/

export function defaultPage(payload) {
  return function (dispatch) {
    dispatch({ type: SET_DEFAULT, payload: payload });
  };
}

/*-------------- RESET --------------*/

export function resetDetails(payload) {
  return function (dispatch) {
    dispatch({ type: RESET_DETAILS, payload: payload });
  };
}

/*-------------- SORT --------------*/

export function orderByName(payload) {
  return function (dispatch) {
    dispatch({ type: ORDER_BY_NAME, payload: payload });
  };
}

export function orderByHP(payload) {
  return function (dispatch) {
    dispatch({ type: ORDER_BY_HP, payload: payload });
  };
}

export function orderBySpeed(payload) {
  return function (dispatch) {
    dispatch({ type: ORDER_BY_SPEED, payload: payload });
  };
}

export function orderByAttack(payload) {
  return function (dispatch) {
    dispatch({ type: ORDER_BY_ATTACK, payload: payload });
  };
}

export function orderByDefense(payload) {
  return function (dispatch) {
    dispatch({ type: ORDER_BY_DEFENSE, payload: payload });
  };
}

/*-------------- FILTER --------------*/

export function filterByOwned(payload) {
  return function (dispatch) {
    dispatch({ type: FILTER_BY_OWNED, payload: payload });
  };
}

export function filterByType(payload) {
  return function (dispatch) {
    dispatch({ type: FILTER_BY_TYPE, payload: payload });
  };
}

/*-------------- PAGINATION --------------*/

export function setPage(payload) {
  return function (dispatch) {
    dispatch({ type: SET_PAGE, payload: payload });
  };
}

/*-------------- CREATE --------------*/

export function createPokemon(form) {
  return function (dispatch) {
    return axios
      .post(`http://localhost:3001/pokemon/create`, form)
      .then((res) => {
        dispatch({ type: POST_POKEMON, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        alert("Ups! Something went wrong...");
      });
  };
}

/*-------------- DELETE --------------*/

export function deletePokemon(name) {
  return function (dispatch) {
    return axios
      .delete(`http://localhost:3001/pokemon/delete/${name}`)
      .then((res) => {
        dispatch({ type: DELETE_POKEMON, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        alert("Ups! Something went wrong...");
      });
  };
}
