const db = require('../../models');

async function create(data) {
    if (!data.idEstudiante) throw new Error("El idEstudiante es obligatorio");
    if (!data.idEncargado) throw new Error("El idEncargado es obligatorio");

    const relacion = await db.encargado_estudiante.create({
        parentesco: data.parentesco || null,
        idEstudiante: data.idEstudiante,
        idEncargado: data.idEncargado
    });

    return relacion.get({ plain: true });
}

module.exports = { create };
