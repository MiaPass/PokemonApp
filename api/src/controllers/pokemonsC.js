const axios = require("axios");
const { Pokemon, Type, Api } = require("../db");

const getAll = async () => {
  try {
    /*-------------- DB --------------*/

    let result = [];
    let dbPokemon = await Pokemon.findAll({
      include: Type,
    });
    result = [...dbPokemon];

    /*-------------- API --------------*/

    let dbPoke = await Api.findAll();

    result = [...result, ...dbPoke];

    return result;
  } catch (err) {
    console.log("pokemonsC: Error 1, ", err);
  }
};

const getByName = async (name) => {
  try {
    console.log(name);

    /*-------------- DB --------------*/

    let pok = name[0].toUpperCase() + name.slice(1);

    let dbData = await Pokemon.findOne({
      where: { name: pok },
      include: Type,
    });
    // console.log(dbData);

    /*-------------- API --------------*/

    let apiData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const response = apiData.data;

    let apiResult = {
      id: response.id,
      image: response.sprites.other.dream_world.front_default,
      name: response.name[0].toUpperCase() + response.name.slice(1),
      types: response.types.map(
        (t) => t.type.name[0].toUpperCase() + t.type.name.slice(1)
      ),
      hp: response.stats[0].base_stat,
      attack: response.stats[1].base_stat,
      defense: response.stats[2].base_stat,
      speed: response.stats[5].base_stat,
      height: response.height,
      weight: response.weight,
    };

    // console.log(apiResult);

    if (apiResult) {
      console.log(apiResult);
      return apiResult;
    } else {
      return dbData;
    }
  } catch (err) {
    console.log("pokemonsC: Error 2, ", err);
  }
};

const getById = async (idPokemon) => {
  try {
    if (idPokemon.length > 6 && typeof idPokemon === "string") {
      /*-------------- DB --------------*/

      let dbData = await Pokemon.findOne({
        where: { id: idPokemon },
        include: Type,
      });
      console.log(dbData);
      return dbData;
    } else {
      /*-------------- API --------------*/

      let apiData = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${idPokemon}`
      );
      const response = apiData.data;

      let apiResult = {
        id: response.id,
        image: response.sprites.other.dream_world.front_default,
        name: response.name[0].toUpperCase() + response.name.slice(1),
        types: response.types.map(
          (t) => t.type.name[0].toUpperCase() + t.type.name.slice(1)
        ),
        hp: response.stats[0].base_stat,
        attack: response.stats[1].base_stat,
        defense: response.stats[2].base_stat,
        speed: response.stats[5].base_stat,
        height: response.height,
        weight: response.weight,
      };
      // console.log(apiResult.name);
      return apiResult;
    }
  } catch (err) {
    console.log("pokemonsC: Error 3, ", err);
  }
};

const newPokemon = async (
  name,
  hp,
  attack,
  defense,
  speed,
  height,
  weight,
  image,
  img,
  types
) => {
  try {
    const createPokemon = await Pokemon.create({
      name,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      image,
      img,
    });
    const type = types?.map(async (e) => {
      const typeName = await Type.findOne({
        where: { name: e },
      });
      createPokemon.addType(typeName);
    });
    await Promise.all(type);
    // console.log(createPokemon);
    return createPokemon;
  } catch (err) {
    console.log("pokemonsC: Error 4, ", err);
  }
};

const deletePokemon = async (name) => {
  await Pokemon.destroy({
    where: {
      name: name,
    },
  });
};

module.exports = {
  getAll,
  getByName,
  getById,
  newPokemon,
  deletePokemon,
};
