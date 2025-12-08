const db = require('../../models');

async function findAll() {
    const carreras = await db.carrera.findAll();
    return carreras.map(c => c.get({ plain: true }));
}

async function findById(id) {
    const carrera = await db.carrera.findByPk(id);
    if (!carrera) throw new Error('Carrera no encontrada');

    return carrera.get({ plain: true });
}

module.exports = { findAll, findById };
