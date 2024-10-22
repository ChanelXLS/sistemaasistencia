// routes/asistencia.js
const express = require('express');
const router = express.Router();
const asistenciaController = require('../controllers/asistenciaController'); // Asegúrate de que este archivo exista y esté bien definido

// Define las rutas
router.get('/', asistenciaController.listarAsistencias); // Asegúrate de que listarAsistencias esté definida en asistenciaController
router.post('/', asistenciaController.agregarAsistencia); // Asegúrate de que agregarAsistencia esté definida
router.get('/:id', asistenciaController.obtenerAsistencia); // Asegúrate de que obtenerAsistencia esté definida
router.put('/:id', asistenciaController.actualizarAsistencia); // Asegúrate de que actualizarAsistencia esté definida
router.delete('/:id', asistenciaController.eliminarAsistencia); // Asegúrate de que eliminarAsistencia esté definida

module.exports = router;
