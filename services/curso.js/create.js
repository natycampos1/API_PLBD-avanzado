const db = require('../../models');

async function create(curso) {
    if (!curso.nombre) throw new Error('El nombre es obligatorio');
    if (!curso.idCarrera) throw new Error('La carrera es obligatoria');

    const nuevo = await db.curso.create({
        nombre: curso.nombre,
        cuatrimestre: curso.cuatrimestre || null,
        creditos: curso.creditos || null,
        idCarrera: curso.idCarrera
    });

    return nuevo.get({ plain: true });
}

module.exports = { create };
