const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const pokemon = require("./pokemonR");
const type = require("./typeR");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/pokemon", pokemon);
router.use("/type", type);

module.exports = router;
