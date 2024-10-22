// controllers/asistenciaController.js
const db = require('../config/db');

// Listar asistencias
exports.listarAsistencias = async (req, res) => {
    try {
        const [asistencias] = await db.query('SELECT * FROM asistencias');
        res.status(200).json(asistencias);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Agregar asistencia
exports.agregarAsistencia = async (req, res) => {
    const { alumnoId, claseId, fecha } = req.body;
    try {
        await db.query('INSERT INTO asistencias (alumnoId, claseId, fecha) VALUES (?, ?, ?)', [alumnoId, claseId, fecha]);
        res.status(201).json({ message: 'Asistencia agregada exitosamente' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Obtener asistencia por ID
exports.obtenerAsistencia = async (req, res) => {
    const { id } = req.params;
    try {
        const [asistencia] = await db.query('SELECT * FROM asistencias WHERE id = ?', [id]);
        if (asistencia.length === 0) {
            return res.status(404).json({ message: 'Asistencia no encontrada' });
        }
        res.status(200).json(asistencia[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Actualizar asistencia
exports.actualizarAsistencia = async (req, res) => {
    const { id } = req.params;
    const { alumnoId, claseId, fecha } = req.body;
    try {
        await db.query('UPDATE asistencias SET alumnoId = ?, claseId = ?, fecha = ? WHERE id = ?', [alumnoId, claseId, fecha, id]);
        res.status(200).json({ message: 'Asistencia actualizada exitosamente' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Eliminar asistencia
exports.eliminarAsistencia = async (req, res) => {
    const { id } = req.params;
    try {
        await db.query('DELETE FROM asistencias WHERE id = ?', [id]);
        res.status(200).json({ message: 'Asistencia eliminada exitosamente' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
