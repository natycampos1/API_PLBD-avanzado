const db = require('../../models');

async function create(data) {
    if (!data.idMatricula) throw new Error('El idMatricula es obligatorio');

    const calificacion = await db.calificacion.create({
        nota: data.nota || null,
        fecha: data.fecha || new Date(),
        idMatricula: data.idMatricula
    });

    return calificacion.get({ plain: true });
}

module.exports = { create };
