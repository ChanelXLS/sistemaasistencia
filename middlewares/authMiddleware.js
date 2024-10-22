// middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');

// Verificar token JWT
exports.protegerRuta = (req, res, next) => {
    const token = req.headers['authorization'];
    
    if (!token) {
        return res.status(403).json({ message: 'Token no proporcionado' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.usuario = decoded; // Añadir información del usuario al request
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Token no válido' });
    }
};

// Verificar si el usuario es administrador
exports.verificarAdmin = (req, res, next) => {
    if (req.usuario.tipoUsuario !== 'Admin') {
        return res.status(403).json({ message: 'Acceso denegado: Requiere rol de Administrador' });
    }
    next();
};

// Verificar si el usuario es profesor
exports.verificarProfesor = (req, res, next) => {
    if (req.usuario.tipoUsuario !== 'Profesor' && req.usuario.tipoUsuario !== 'Admin') {
        return res.status(403).json({ message: 'Acceso denegado: Requiere rol de Profesor' });
    }
    next();
};

// Verificar si el usuario es estudiante
exports.verificarAlumno = (req, res, next) => {
    if (req.usuario.tipoUsuario !== 'Alumno' && req.usuario.tipoUsuario !== 'Profesor' && req.usuario.tipoUsuario !== 'Admin') {
        return res.status(403).json({ message: 'Acceso denegado: Requiere rol de Estudiante' });
    }
    next();
};
