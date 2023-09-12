// Ejemplo de un servicio para la API
const axios = require('axios');

exports.obtenerPokemones = async () => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=500');
    return response.data;
  } catch (error) {
    throw error;
  }
};


exports.obtenerPokemon = async (pokemonId) => {
  try {

    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/'+pokemonId+'/');
    return response.data;
  } catch (error) {
    throw error;
  }
};

exports.obtenerMove = async (movimientoId) => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/move/'+movimientoId);
    return response.data;
  } catch (error) {
    throw error;
  }
};
