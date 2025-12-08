const db = require('../../models');

async function create(data) {
    if (!data.idEstudiante) throw new Error('El idEstudiante es obligatorio');

    const matricula = await db.matricula.create({
        fecha_inscripcion: data.fecha_inscripcion || null,
        estado: data.estado || null,
        idEstudiante: data.idEstudiante
    });

    return matricula.get({ plain: true });
}

module.exports = { create };
