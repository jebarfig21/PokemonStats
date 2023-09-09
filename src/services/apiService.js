// Ejemplo de un servicio para la API
const axios = require('axios');

exports.obtenerDatos = async () => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/35');
    return response.data;
  } catch (error) {
    throw error;
  }
};

console.log("Por fuera de service")