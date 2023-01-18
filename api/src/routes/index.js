const { Router } = require("express");
const express = require("express");
const morgan = require("morgan");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
router.use(morgan("dev"));
router.use(express.json());

const dietRouter = require("../routers/dietRouter.js");
const recipeRouter = require("../routers/recipeRouter.js");
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/diets", dietRouter);
router.use("/recipes", recipeRouter);

module.exports = router;
