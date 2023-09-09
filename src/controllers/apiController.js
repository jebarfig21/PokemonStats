// Ejemplo de un controlador para la API
const apiService = require('../services/apiService');

exports.getPokemones = async (req, res) => {
  try {
    console.log("Llegamos a controller")
    const data = await apiService.obtenerPokemones(); // Llama a un servicio para obtener datos de la API externa. 
    namePokemon=[]
    for (elem  in data.results){
      namePokemon.push(data.results[elem].name);
    }
    res.json(namePokemon);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener datos de la API' });
  }
};

