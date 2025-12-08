const db = require('../../models');

async function update(id, data) {
    const profesor = await db.profesor.findByPk(id);
    if (!profesor) throw new Error('Profesor no encontrado');

    await profesor.update({
        nombre: data.nombre || profesor.nombre,
        apellidos: data.apellidos || profesor.apellidos,
        email: data.email || profesor.email,
        telefono: data.telefono || profesor.telefono,
        fecha_nacimiento: data.fecha_nacimiento || profesor.fecha_nacimiento,
        ciudad: data.ciudad || profesor.ciudad
    });

    return profesor.get({ plain: true });
}

module.exports = { update };
