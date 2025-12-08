const db = require('../../models');

async function create(data) {
    if (!data.idMatricula) throw new Error('El idMatricula es obligatorio');

    const asistencia = await db.asistencia.create({
        fecha: data.fecha || new Date(), // Si no envían fecha, se pone automática
        estado: data.estado || null,
        idMatricula: data.idMatricula
    });

    return asistencia.get({ plain: true });
}

module.exports = { create };
