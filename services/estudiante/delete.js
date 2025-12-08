const db = require('../../models');

async function remove(id) {
    const estudiante = await db.estudiante.findByPk(id);
    if (!estudiante) throw new Error('Estudiante no encontrado');

    await estudiante.destroy();
    return { message: 'Estudiante eliminado correctamente' };
}

module.exports = { remove };
