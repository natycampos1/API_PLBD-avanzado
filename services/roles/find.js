const db = require('../../models');

async function findAll() {
    const roles = await db.rol.findAll();
    return roles.map(r => r.get({ plain: true }));
}

async function findById(id) {
    const rol = await db.rol.findByPk(id);
    if (!rol) throw new Error('Rol no encontrado');
    return rol.get({ plain: true });
}

module.exports = { findAll, findById };
