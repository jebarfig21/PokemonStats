// Ejemplo de un controlador para la API
const apiService = require('../services/apiService');

exports.getDatos = async (req, res) => {
  try {
    console.log("Llegamos a controller")
    const data = await apiService.obtenerDatos(); // Llama a un servicio para obtener datos de la API externa.
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener datos de la API' });
  }
};

