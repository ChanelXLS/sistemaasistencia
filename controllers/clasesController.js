// controllers/clasesController.js
const db = require('../config/db');

// Listar todas las clases
exports.listarClases = async (req, res) => {
    try {
        const [clases] = await db.query('SELECT * FROM clases');
        res.status(200).json(clases);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Agregar una nueva clase
exports.agregarClase = async (req, res) => {
    const { Nombre, ID_Profesor, Horario } = req.body;
    try {
        await db.query('INSERT INTO clases (Nombre, ID_Profesor, Horario) VALUES (?, ?, ?)', [Nombre, ID_Profesor, Horario]);
        res.status(201).json({ message: 'Clase agregada exitosamente' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Obtener una clase por ID
exports.obtenerClase = async (req, res) => {
    const { id } = req.params;
    try {
        const [clase] = await db.query('SELECT * FROM clases WHERE id = ?', [id]);
        if (clase.length === 0) {
            return res.status(404).json({ message: 'Clase no encontrada' });
        }
        res.status(200).json(clase[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Actualizar una clase
exports.actualizarClase = async (req, res) => {
    const { id } = req.params;
    const { Nombre, ID_Profesor, Horario } = req.body;
    try {
        await db.query('UPDATE clases SET Nombre = ?, ID_Profesor = ?, Horario = ? WHERE id = ?', [Nombre, ID_Profesor, Horario, id]);
        res.status(200).json({ message: 'Clase actualizada exitosamente' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Eliminar una clase
exports.eliminarClase = async (req, res) => {
    const { id } = req.params;
    try {
        await db.query('DELETE FROM clases WHERE id = ?', [id]);
        res.status(200).json({ message: 'Clase eliminada exitosamente' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
