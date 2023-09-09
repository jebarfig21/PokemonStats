const express = require('express');
const app = express();
const apiRoutes = require('./routes/apiRoutes');

// Middleware para procesar JSON
app.use(express.json());

// Configura las rutas para la API
app.use('/api', apiRoutes);
//app.use('/datos', apiRoutes);


// Inicia el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor Express corriendo en el puerto ${port}`);
});
