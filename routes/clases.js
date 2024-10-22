// routes/clases.js
const express = require('express');
const router = express.Router();
const clasesController = require('../controllers/clasesController');

router.get('/', clasesController.listarClases);
router.post('/', clasesController.agregarClase);
router.get('/:id', clasesController.obtenerClase);
router.put('/:id', clasesController.actualizarClase);
router.delete('/:id', clasesController.eliminarClase);

module.exports = router;
