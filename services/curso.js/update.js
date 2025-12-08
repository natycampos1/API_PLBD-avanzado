const db = require('../../models');

async function update(id, curso) {
    const existente = await db.curso.findByPk(id);

    if (!existente) throw new Error('Curso no encontrado');

    await existente.update({
        nombre: curso.nombre || existente.nombre,
        cuatrimestre: curso.cuatrimestre ?? existente.cuatrimestre,
        creditos: curso.creditos ?? existente.creditos,
        idCarrera: curso.idCarrera ?? existente.idCarrera
    });

    return existente.get({ plain: true });
}

module.exports = { update };
