// Ejemplo de definición de rutas para la API
const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

// Define una ruta GET para obtener datos de la API
router.get('/allPokemon', apiController.getPokemones);
router.get('/onePokemon/:pokemonId', apiController.getPokemon);
router.get('/move/:moveId',apiController.getMove)

module.exports = router;
