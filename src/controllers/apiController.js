// Ejemplo de un controlador para la API
const apiService = require('../services/apiService');

exports.getPokemones = async (req, res) => {
  try {
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

/*
* Funcion que manda a llamar a un Pokemon por medio de su api, se seleccionan los datos necesarios para presentar en nuestra vista
*/
exports.getPokemon = async (req, res) => {
  const pokemonId = req.params.pokemonId;
  const data = await apiService.obtenerPokemon(pokemonId);
  var nombre =  data.name
  var imagen = data.sprites.front_default
  var movimientos = []
  for(var i = 3; i>0; i--){
    movimientos.push(data.moves[i].move.name)
  }
  var tipos = []
  for(var i=0; i<data.types.length;i++){
    tipos.push(data.types[i].type.name)
  }
  res.json({ 
    nombre : nombre,
    imagen : imagen,
    movimientos : movimientos,
    tipos : tipos
  });
};

/*
* Funcion que obtiene movimiento de la api pokemon, y regresa las estadisticas de un movimiento solicitado, las cuales
* ya son filtradas en este método
*/
exports.getMove = async(req, res) => {
  const movimientoId = req.params.moveId;
  const data = await apiService.obtenerMove(movimientoId);
 
  res.json({
    accuracy : data.accuracy,
    power : data.power,
    pp : data.pp,
    priority : data.priority,
    effect_chance : data.effect_chance
  })
}