// models/Estudiante.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Asegúrate de que la configuración de tu base de datos esté bien definida

const Estudiante = sequelize.define('Estudiante', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    // Agrega otros campos según tus necesidades
});

// Sincroniza el modelo con la base de datos (opcional)
// Estudiante.sync(); // Puedes comentar esto si no deseas crear la tabla automáticamente

module.exports = Estudiante;
