const express = require('express');
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const cors = require('cors'); 

// Middleware para procesar JSON
app.use(express.json());

// Configura las políticas de CORS para correr en localhost

const corsOptions = {
  origin: ['null', 'https://jebarfig21.github.io'], // Agrega los dominios permitidos en un array
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

// Configura las rutas para la API
app.use('/', apiRoutes);


// Inicia el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor Express corriendo en el puerto ${port}`);
});
