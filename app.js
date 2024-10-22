// app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();

const authRoutes = require('./routes/auth');
const estudiantesRoutes = require('./routes/estudiantes');
const clasesRoutes = require('./routes/clases');
const asistenciaRoutes = require('./routes/asistencia');

// Middlewares
app.use(bodyParser.json());

// Rutas
app.use('/api/auth', authRoutes);  // Rutas de autenticación
app.use('/api/estudiantes', estudiantesRoutes);  // Protegidas por roles
app.use('/api/clases', clasesRoutes);  // Añadir protección similar
app.use('/api/asistencia', asistenciaRoutes);  // Añadir protección similar

// Iniciar servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
