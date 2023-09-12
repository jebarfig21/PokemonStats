const express = require('express');
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const cors = require('cors'); 

// Middleware para procesar JSON
app.use(express.json());
// Configura las políticas de CORS

const corsOptions = {
  origin: 'null', // Reemplaza con el dominio de tu sitio web
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Permite incluir cookies en las solicitudes (si es necesario)
  optionsSuccessStatus: 204, // Establece el código de estado para respuestas pre-vuelo OPTIONS
};

app.use(cors(corsOptions));

// Configura las rutas para la API
app.use('/', apiRoutes);


// Inicia el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor Express corriendo en el puerto ${port}`);
});
