// controllers/authController.js
const db = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Registro de usuarios (Admin, Profesor, Alumno)
exports.registrarUsuario = async (req, res) => {
    const { Nombre, Apellido, Email, Contraseña, Tipo_Usuario } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(Contraseña, 10);
        await db.query('INSERT INTO usuarios (Nombre, Apellido, Email, Contraseña, Tipo_Usuario) VALUES (?, ?, ?, ?, ?)', 
            [Nombre, Apellido, Email, hashedPassword, Tipo_Usuario]);
        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Inicio de sesión
exports.iniciarSesion = async (req, res) => {
    const { Email, Contraseña } = req.body;
    try {
        const [usuarios] = await db.query('SELECT * FROM usuarios WHERE Email = ?', [Email]);
        const usuario = usuarios[0];
        
        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        const esValido = await bcrypt.compare(Contraseña, usuario.Contraseña);
        if (!esValido) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }

        // Generar token JWT
        const token = jwt.sign({ id: usuario.ID, tipoUsuario: usuario.Tipo_Usuario }, process.env.JWT_SECRET, {
            expiresIn: '1h' // Duración del token
        });

        res.status(200).json({ token, message: 'Inicio de sesión exitoso' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
