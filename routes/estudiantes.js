// routes/estudiantes.js
const express = require('express');
const router = express.Router();
const estudiantesController = require('../controllers/estudiantesController');
const { protegerRuta, verificarAdmin, verificarProfesor, verificarAlumno } = require('../middlewares/authMiddleware');

// Solo los administradores y profesores pueden agregar, actualizar o eliminar estudiantes
router.get('/', protegerRuta, verificarAlumno, estudiantesController.listarEstudiantes);
router.post('/', protegerRuta, verificarProfesor, estudiantesController.agregarEstudiante);
router.get('/:id', protegerRuta, verificarAlumno, estudiantesController.obtenerEstudiante);
router.put('/:id', protegerRuta, verificarProfesor, estudiantesController.actualizarEstudiante);
router.delete('/:id', protegerRuta, verificarProfesor, estudiantesController.eliminarEstudiante);

module.exports = router;
