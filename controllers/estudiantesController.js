// controllers/estudiantesController.js

const Estudiante = require('../models/Estudiante'); // Asegúrate de que el modelo esté bien definido
const db = require('../config/db');

exports.listarEstudiantes = async (req, res) => {
    try {
        const estudiantes = await Estudiante.find(); // Usa el método adecuado para obtener estudiantes
        res.json(estudiantes);
    } catch (error) {
        res.status(500).json({ message: 'Error al listar estudiantes', error });
    }
};

exports.agregarEstudiante = async (req, res) => {
    try {
        const nuevoEstudiante = new Estudiante(req.body); // Asegúrate de que el body contenga la información necesaria
        await nuevoEstudiante.save();
        res.status(201).json(nuevoEstudiante);
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar estudiante', error });
    }
};

exports.obtenerEstudiante = async (req, res) => {
    try {
        const estudiante = await Estudiante.findById(req.params.id);
        if (!estudiante) return res.status(404).json({ message: 'Estudiante no encontrado' });
        res.json(estudiante);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener estudiante', error });
    }
};

exports.actualizarEstudiante = async (req, res) => {
    try {
        const estudiante = await Estudiante.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!estudiante) return res.status(404).json({ message: 'Estudiante no encontrado' });
        res.json(estudiante);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar estudiante', error });
    }
};

exports.eliminarEstudiante = async (req, res) => {
    try {
        const estudiante = await Estudiante.findByIdAndDelete(req.params.id);
        if (!estudiante) return res.status(404).json({ message: 'Estudiante no encontrado' });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar estudiante', error });
    }
};
