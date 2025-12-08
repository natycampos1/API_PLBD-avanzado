const db = require('../../models');

async function remove(id) {
    const rol = await db.rol.findByPk(id);
    if (!rol) throw new Error('Rol no encontrado');

    await rol.destroy();
    return { message: 'Rol eliminado correctamente' };
}

module.exports = { remove };
