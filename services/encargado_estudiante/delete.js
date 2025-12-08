const db = require('../../models');

async function remove(id) {
    const relacion = await db.encargado_estudiante.findByPk(id);
    if (!relacion) throw new Error("Relación no encontrada");

    await relacion.destroy();
    return { message: 'Relación eliminada correctamente' };
}

module.exports = { remove };
