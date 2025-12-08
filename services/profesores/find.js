const db = require('../../models');

async function findAll() {
    const profesores = await db.profesor.findAll();
    return profesores.map(p => p.get({ plain: true }));
}

async function findById(id) {
    const profesor = await db.profesor.findByPk(id);
    if (!profesor) throw new Error('Profesor no encontrado');

    return profesor.get({ plain: true });
}

module.exports = { findAll, findById };
