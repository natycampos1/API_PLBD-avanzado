const db = require('../../models');

async function findAll() {
    const calificaciones = await db.calificacion.findAll();
    return calificaciones.map(c => c.get({ plain: true }));
}

async function findById(id) {
    const calificacion = await db.calificacion.findByPk(id);
    if (!calificacion) throw new Error('Calificación no encontrada');

    return calificacion.get({ plain: true });
}

module.exports = { findAll, findById };
