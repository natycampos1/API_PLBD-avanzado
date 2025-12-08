const db = require('../../models');

async function create(data) {
    if (!data.nombre) throw new Error('El nombre es obligatorio');
    if (!data.apellidos) throw new Error('Los apellidos son obligatorios');
    if (!data.email) throw new Error('El email es obligatorio');

    const profesor = await db.profesor.create({
        nombre: data.nombre,
        apellidos: data.apellidos,
        email: data.email,
        telefono: data.telefono || null,
        fecha_nacimiento: data.fecha_nacimiento || null,
        ciudad: data.ciudad || null
    });

    return profesor.get({ plain: true });
}

module.exports = { create };
