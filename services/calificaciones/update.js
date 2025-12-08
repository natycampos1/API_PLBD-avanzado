const db = require('../../models');

async function update(id, data) {
    const calificacion = await db.calificacion.findByPk(id);
    if (!calificacion) throw new Error('Calificación no encontrada');

    await calificacion.update({
        nota: data.nota ?? calificacion.nota,
        fecha: data.fecha || calificacion.fecha,
        idMatricula: data.idMatricula || calificacion.idMatricula
    });

    return calificacion.get({ plain: true });
}

module.exports = { update };
