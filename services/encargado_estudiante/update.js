const db = require('../../models');

async function update(id, data) {
    const relacion = await db.encargado_estudiante.findByPk(id);
    if (!relacion) throw new Error("Relación no encontrada");

    await relacion.update({
        parentesco: data.parentesco || relacion.parentesco,
        idEstudiante: data.idEstudiante || relacion.idEstudiante,
        idEncargado: data.idEncargado || relacion.idEncargado
    });

    return relacion.get({ plain: true });
}

module.exports = { update };
