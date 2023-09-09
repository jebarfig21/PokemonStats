// Ejemplo de definición de rutas para la API
const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

// Define una ruta GET para obtener datos de la API
router.get('/datos', apiController.getDatos);
console.log("Llegamos a routes")
module.exports = router;
