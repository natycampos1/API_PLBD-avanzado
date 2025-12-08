const db = require('../../models');

async function findAll() {
    const asistencias = await db.asistencia.findAll();
    return asistencias.map(a => a.get({ plain: true }));
}

async function findById(id) {
    const asistencia = await db.asistencia.findByPk(id);
    if (!asistencia) throw new Error('Asistencia no encontrada');

    return asistencia.get({ plain: true });
}

module.exports = { findAll, findById };
