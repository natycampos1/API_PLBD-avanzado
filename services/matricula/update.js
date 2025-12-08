const db = require('../../models');

async function update(id, data) {
    const matricula = await db.matricula.findByPk(id);
    if (!matricula) throw new Error('La matrícula no existe');

    await matricula.update({
        fecha_inscripcion: data.fecha_inscripcion || matricula.fecha_inscripcion,
        estado: data.estado || matricula.estado,
        idEstudiante: data.idEstudiante || matricula.idEstudiante
    });

    return matricula.get({ plain: true });
}

module.exports = { update };
