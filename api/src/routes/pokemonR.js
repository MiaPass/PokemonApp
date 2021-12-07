const { Router } = require("express");
const router = Router();

const {
  getAll,
  getByName,
  getById,
  newPokemon,
  deletePokemon,
} = require("../controllers/pokemonsC");

router.get("/all", (req, res) => {
  getAll()
    .then((result) => res.json(result))
    .catch((err) => console.log("pokemonR: Error 1, ", err));
});

router.get("/name/:name", (req, res) => {
  const { name } = req.params;
  getByName(name)
    .then((result) => res.json(result))
    .catch((err) => console.log("pokemonR: Error 2, ", err));
});

router.get("/id/:id", (req, res) => {
  const { id } = req.params;
  getById(id)
    .then((result) => res.json(result))
    .catch((err) => console.log("pokemonR: Error 3, ", err));
});

router.post("/create/", (req, res) => {
  const {
    name,
    hp,
    attack,
    defense,
    speed,
    height,
    weight,
    image,
    img,
    types,
  } = req.body;

  newPokemon(
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
  )
    .then((result) => res.json(result))
    .catch((err) => console.log("pokemonR: Error 4, ", err));
});

router.delete("/delete/:name", (req, res) => {
  const { name } = req.params;
  deletePokemon(name)
    .then(() => res.json({ msg: "Pokemon " + name + " deleted" }))
    .catch((err) => console.log("pokemonR: Error 5, ", err));
});

module.exports = router;
