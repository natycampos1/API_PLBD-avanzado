const db = require('../../models');

async function update(id, data) {
    const carrera = await db.carrera.findByPk(id);
    if (!carrera) throw new Error('Carrera no encontrada');

    await carrera.update({
        nombre: data.nombre || carrera.nombre,
        duracion: data.duracion || carrera.duracion,
        estado: data.estado || carrera.estado
    });

    return carrera.get({ plain: true });
}

module.exports = { update };
