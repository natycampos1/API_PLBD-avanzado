const db = require('../../models');

async function create(data) {
    if (!data.nombre) throw new Error('El nombre es obligatorio');

    const carrera = await db.carrera.create({
        nombre: data.nombre,
        duracion: data.duracion || null,
        estado: data.estado || null
    });

    return carrera.get({ plain: true });
}

module.exports = { create };
