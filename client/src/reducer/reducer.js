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

const initialState = {
  allPokemons: [],
  pokemonDetail: {},
  types: [],
  filteredPokemons: [],
  sortPokemons: [],
  newPokemon: {},
  deletePokemon: {},
  page: 1,
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    /*-------------- GET --------------*/

    case GET_ALL_POKEMONS:
      return {
        ...state,
        allPokemons: payload,
        filteredPokemons: payload,
      };

    case GET_DETAILS:
      return {
        ...state,
        pokemonDetail: payload,
      };
    case GET_TYPES:
      return {
        ...state,
        types: payload,
      };
    /*-------------- SEARCH --------------*/

    case SEARCH:
      let array = [];
      array.push(payload);
      return {
        ...state,
        filteredPokemons: array,
      };

    /*-------------- SET DEFAULT --------------*/

    case SET_DEFAULT:
      return {
        ...state,
        filteredPokemons: state.allPokemons,
      };

    /*-------------- RESET DETAILS --------------*/

    case RESET_DETAILS:
      return {
        ...state,
        pokemonDetail: {},
      };

    /*-------------- SORT --------------*/

    case ORDER_BY_NAME:
      if (payload === "Asc") {
        return {
          ...state,
          sortPokemons: state.filteredPokemons.sort((a, b) => {
            return a.name.localeCompare(b.name);
          }),
        };
      }
      if (payload === "Desc") {
        return {
          ...state,
          sortPokemons: state.filteredPokemons.sort((a, b) => {
            return b.name.localeCompare(a.name);
          }),
        };
      } else {
        return {
          ...state,
          sortPokemons: state.allPokemons,
        };
      }

    case ORDER_BY_HP:
      if (payload === "Highest to Lowest") {
        return {
          ...state,
          sortPokemons: state.filteredPokemons.sort((prev, next) => {
            return next.hp - prev.hp;
          }),
        };
      } else if (payload === "Lowest to Highest") {
        return {
          ...state,
          sortPokemons: state.filteredPokemons.sort((prev, next) => {
            return prev.hp - next.hp;
          }),
        };
      } else if (payload === "Default") {
        return {
          ...state,
          sortPokemons: state.allPokemons,
        };
      }

      break;

    case ORDER_BY_SPEED:
      if (payload === "Highest to Lowest") {
        return {
          ...state,
          sortPokemons: state.filteredPokemons.sort((prev, next) => {
            return next.speed - prev.speed;
          }),
        };
      } else if (payload === "Lowest to Highest") {
        return {
          ...state,
          sortPokemons: state.filteredPokemons.sort((prev, next) => {
            return prev.speed - next.speed;
          }),
        };
      } else if (payload === "Default") {
        return {
          ...state,
          sortPokemons: state.allPokemons,
        };
      }

      break;

    case ORDER_BY_ATTACK:
      if (payload === "Highest to Lowest") {
        return {
          ...state,
          sortPokemons: state.filteredPokemons.sort((prev, next) => {
            return next.attack - prev.attack;
          }),
        };
      } else if (payload === "Lowest to Highest") {
        return {
          ...state,
          sortPokemons: state.filteredPokemons.sort((prev, next) => {
            return prev.attack - next.attack;
          }),
        };
      } else if (payload === "Default") {
        return {
          ...state,
          sortPokemons: state.allPokemons,
        };
      }

      break;

    case ORDER_BY_DEFENSE:
      if (payload === "Highest to Lowest") {
        return {
          ...state,
          sortPokemons: state.filteredPokemons.sort((prev, next) => {
            return next.defense - prev.defense;
          }),
        };
      } else if (payload === "Lowest to Highest") {
        return {
          ...state,
          sortPokemons: state.filteredPokemons.sort((prev, next) => {
            return prev.defense - next.defense;
          }),
        };
      } else if (payload === "Default") {
        return {
          ...state,
          sortPokemons: state.allPokemons,
        };
      }

      /*-------------- FILTER --------------*/

      break;

    case FILTER_BY_OWNED:
      if (payload === "DB") {
        return {
          ...state,
          filteredPokemons: state.allPokemons.filter((pok) => {
            return pok.id.length > 6 && typeof pok.id === "string";
          }),
        };
      }
      if (payload === "API") {
        return {
          ...state,
          filteredPokemons: state.allPokemons.filter((pok) => {
            return typeof pok.id === "number";
          }),
        };
      } else {
        return {
          ...state,
          filteredPokemons: state.allPokemons,
        };
      }

    case FILTER_BY_TYPE:
      if (payload !== "Default") {
        const maping = state.allPokemons.map((p) => {
          return { ...p, types: p.types.map((e) => e) };
        });
        const filtered = maping.filter((t) => {
          return t.types.includes(payload);
        });
        return {
          ...state,
          filteredPokemons: filtered,
        };
      } else {
        return {
          ...state,
          filteredPokemons: state.allGames,
        };
      }

    /*-------------- PATGINATION --------------*/

    case SET_PAGE:
      return {
        ...state,
        page: payload,
      };

    /*-------------- CREATE --------------*/

    case POST_POKEMON:
      return {
        ...state,
        newPokemon: payload,
      };

    /*-------------- DELETE --------------*/

    case DELETE_POKEMON:
      return {
        ...state,
        deletePokemon: payload,
      };

    /*-------------- DEFAULT --------------*/

    default: {
      return state;
    }
  }
}
