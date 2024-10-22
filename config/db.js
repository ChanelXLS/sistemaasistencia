// config/db.js
const { Sequelize } = require('sequelize');
require('dotenv').config();

// Crear una nueva instancia de Sequelize
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql', // o 'mariadb' según tu base de datos
});

module.exports = sequelize;
