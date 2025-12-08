const db = require('../../models');

async function findAll() {
    const estudiantes = await db.estudiante.findAll({
        include: [{ model: db.carrera, as: 'carrera' }]
    });
    return estudiantes.map(e => e.get({ plain: true }));
}

async function findById(id) {
    const estudiante = await db.estudiante.findByPk(id, {
        include: [{ model: db.carrera, as: 'carrera' }]
    });
    if (!estudiante) throw new Error('Estudiante no encontrado');
    return estudiante.get({ plain: true });
}

module.exports = { findAll, findById };
