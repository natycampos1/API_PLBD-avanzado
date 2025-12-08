const db = require('../../models');

async function update(id, data) {
    const asistencia = await db.asistencia.findByPk(id);
    if (!asistencia) throw new Error('Asistencia no encontrada');

    await asistencia.update({
        fecha: data.fecha || asistencia.fecha,
        estado: data.estado || asistencia.estado,
        idMatricula: data.idMatricula || asistencia.idMatricula
    });

    return asistencia.get({ plain: true });
}

module.exports = { update };
