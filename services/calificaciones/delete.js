const db = require('../../models');

async function remove(id) {
    const calificacion = await db.calificacion.findByPk(id);
    if (!calificacion) throw new Error('Calificación no encontrada');

    await calificacion.destroy();

    return { message: 'Calificación eliminada correctamente' };
}

module.exports = { remove };
