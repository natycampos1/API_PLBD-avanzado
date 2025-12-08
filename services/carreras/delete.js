const db = require('../../models');

async function remove(id) {
    const carrera = await db.carrera.findByPk(id);
    if (!carrera) throw new Error('Carrera no encontrada');

    await carrera.destroy();
    return { message: 'Carrera eliminada correctamente' };
}

module.exports = { remove };
