// routes/auth.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Rutas de autenticación
router.post('/registrar', authController.registrarUsuario);  // Solo el administrador debería tener acceso
router.post('/login', authController.iniciarSesion);

module.exports = router;
