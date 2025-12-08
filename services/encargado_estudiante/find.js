const db = require('../../models');

async function findAll() {
    const relaciones = await db.encargado_estudiante.findAll();
    return relaciones.map(r => r.get({ plain: true }));
}

async function findById(id) {
    const relacion = await db.encargado_estudiante.findByPk(id);
    if (!relacion) throw new Error("Relación no encontrada");
    return relacion.get({ plain: true });
}

module.exports = { findAll, findById };
