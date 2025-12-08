const db = require('../../models');

async function remove(id) {
    const asistencia = await db.asistencia.findByPk(id);
    if (!asistencia) throw new Error('Asistencia no encontrada');

    await asistencia.destroy();

    return { message: 'Asistencia eliminada correctamente' };
}

module.exports = { remove };
