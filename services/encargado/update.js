const db = require('../../models');

async function update(id, encargado) {
    const existe = await db.encargado.findByPk(id);
    if (!existe) throw new Error('El encargado no existe');

    await existe.update({
        nombre: encargado.nombre || existe.nombre,
        apellidos: encargado.apellidos || existe.apellidos,
        telefono: encargado.telefono || existe.telefono,
        email: encargado.email || existe.email,
    });

    return existe.get({ plain: true });
}

module.exports = { update };
