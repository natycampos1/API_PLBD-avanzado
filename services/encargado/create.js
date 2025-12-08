const db = require('../../models');

async function create(encargado) {
    if (!encargado.nombre) throw new Error('El nombre es obligatorio');
    if (!encargado.apellidos) throw new Error('Los apellidos son obligatorios');

    const nuevoEncargado = await db.encargado.create({
        nombre: encargado.nombre,
        apellidos: encargado.apellidos,
        telefono: encargado.telefono || null,
        email: encargado.email || null
    });

    return nuevoEncargado.get({ plain: true });
}

module.exports = { create };
