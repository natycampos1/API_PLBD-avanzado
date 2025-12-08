const db = require('../../models');

async function update(id, data) {
    const estudiante = await db.estudiante.findByPk(id);
    if (!estudiante) throw new Error('Estudiante no encontrado');

    await estudiante.update({
        nombre: data.nombre || estudiante.nombre,
        apellidos: data.apellidos || estudiante.apellidos,
        email: data.email || estudiante.email,
        fecha_nacimiento: data.fecha_nacimiento || estudiante.fecha_nacimiento,
        telefono: data.telefono || estudiante.telefono,
        direccion: data.direccion || estudiante.direccion,
        idCarrera: data.idCarrera || estudiante.idCarrera
    });

    return estudiante.get({ plain: true });
}

module.exports = { update };
